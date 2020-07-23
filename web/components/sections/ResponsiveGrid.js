import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Box, Flex, Text, Image } from "@chakra-ui/core";
import SimpleBlockContent from "../SimpleBlockContent";

const builder = imageUrlBuilder(client);

function ResponsiveGrid(props) {
  const { heading, label, text, images, cta } = props;

  return (
    <Flex
      justifyContent="space-around"
      mx="auto"
      maxWidth="5xl"
      flexWrap="wrap"
      flexDirection="column"
      alignItems="center"
    >
      <Box as="section" width="lg" textAlign="center">
        <Text fontSize="5xl" fontWeight="bold">
          {heading}
        </Text>
        {text && <SimpleBlockContent blocks={text} />}
      </Box>
      <Box>
        {images.map((image, i) => (
          <Image
            key={i}
            src={builder.image(image).auto("format").height(240).width(344).url()}
            alt={image.alt}
          />
        ))}
      </Box>
    </Flex>
  );
}

ResponsiveGrid.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  images: PropTypes.array,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ResponsiveGrid;
