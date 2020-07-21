import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Box, Flex, Text, Image } from "@chakra-ui/core";

const builder = imageUrlBuilder(client);

function Text3Images(props) {
  const { heading, label, text, images, cta } = props;

  return (
    <Flex
      justifyContent="space-around"
      mx="auto"
      maxWidth="5xl"
      flexWrap="wrap"
      alignContent="flex-start"
    >
      <Box as="section" d="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="5xl" fontWeight="bold">
          Our Mission
        </Text>
        <Text width="sm" textAlign="center">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
      <Flex maxW="528px" m={10} flexWrap="wrap" alignContent="flex-start">
        {images.map((image, i) => (
          <Image
            key={i}
            p={3}
            flexGrow={1}
            flexShrink={1}
            maxWidth={i < 2 ? "50%" : "100%"}
            src={builder
              .image(image)
              .auto("format")
              .height(200)
              .width(i < 2 ? 252 : 504)
              .url()}
            alt={image.alt}
          />
        ))}
      </Flex>
    </Flex>
  );
}

Text3Images.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  images: PropTypes.array,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default Text3Images;
