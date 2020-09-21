import React, { Component } from "react";

class Artist extends Component {
  render() {
    const { id } = this.props;
    return <div>Artist {id}</div>;
  }
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  return {
    paths: ["art1", "art2"].map((artistName) => ({ params: { id: artistName } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const { id } = params;
  return { props: { id } };
}

export default Artist;
