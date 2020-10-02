import React, { Component } from "react";
import groq from "groq";
import client from "../../client";
import SimpleBlockContent from "../../components-old/SimpleBlockContent";
import { Box, Flex, Image, Text } from "@chakra-ui/core";
import { urlFor } from "../../components/utils";

class Artist extends Component {
  renderPerformance = ({ _id, date, show: { name } }) => (
    <div key={_id}>
      <div>{_id}</div>
      <div>{date}</div>
      <div>{name}</div>
    </div>
  );

  render() {
    console.log("muly:render", { props: this.props });
    const { artist, performances } = this.props;
    const { name, id, description, slug, image } = artist;

    return (
      <div>
        Artist v3 {id}
        <Text>{name}</Text>
        <Text>slug: {slug.current}</Text>
        <SimpleBlockContent blocks={description} />
        <Image
          src={urlFor(image)}
          alt={image.caption}
          width={{ sm: "100%", md: `${image.width}px` }}
        />
        <div>{performances.map(this.renderPerformance)}</div>
      </div>
    );
  }
}

const artistSlugQuery = groq`
  *[_type == "artist"]{"slug": slug.current}
`;

export async function getStaticPaths() {
  // Return a list of possible value for id

  const artistList = await client.fetch(artistSlugQuery);

  return {
    paths: artistList.map(({ slug }) => ({
      params: {
        id: slug,
      },
    })),
    fallback: false,
  };
}

const artistQueryBySlug = groq`
{
  "artist": *[_type == "artist" && slug.current == $slug][0],
  "performances": *[_type == "performance" && show->artist->slug.current == $slug]
                  | order(date, asc) {
    _id,
    date,
    "show": show->
  }
}
`;

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const { id } = params;
  const answer = await client.fetch(artistQueryBySlug, { slug: id });
  return { props: answer };
  /*
      const performance = artist.shows
        .map(({ performance }) => performance)
        .flat()
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
      return { props: { artist, performance } };
      */
}

export default Artist;
