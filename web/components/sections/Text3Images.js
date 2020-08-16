import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Box, Flex, Text, Image, AspectRatioBox } from "@chakra-ui/core";
import SimpleBlockContent from "../SimpleBlockContent";
import { expandMQ, expandSpan } from "../utils";
import BitIcon from "../icons/Bit";
import PayBoxIcon from "../icons/PayBox";
import CreditCardIcon from "../icons/CreditCard";

const builder = imageUrlBuilder(client);

function Text3Images(props) {
  const { heading, label, text, images, cta } = props;

  return (
    <Box
      mx="auto"
      width="4xl"
      maxWidth="100%"
      display="grid"
      gridTemplateColumns={expandMQ(
        "repeat(1,1fr)",
        "1fr minmax(min-content,1fr) minmax(min-content,1fr)"
      )}
      gridGap={3}
      p={3}
      textAlign="center"
    >
      <Box
        as="section"
        maxWidth="100%"
        textAlign="center"
        paddingBottom={6}
        gridRow={expandSpan(2)}
        paddingRight={6}
      >
        <Text fontSize="5xl" fontWeight="bold">
          {heading}
        </Text>
        {text && <SimpleBlockContent blocks={text} />}
      </Box>
      {images.map((image, i) => {
        const width = 344 * (i === 2 ? 2 : 1);
        const height = 240;

        return (
          <AspectRatioBox
            p={3}
            ratio={width / height}
            key={i}
            width="100%"
            maxWidth={`${width}px`}
            justifySelf="center"
            gridColumn={i === 2 ? expandSpan(2) : undefined}
          >
            <Image
              src={builder.image(image).auto("format").height(height).width(width).url()}
              alt={image.alt}
            />
          </AspectRatioBox>
        );
      })}
    </Box>
  );

  return (
    <Flex
      justifyContent="space-around"
      mx="auto"
      maxWidth="5xl"
      flexWrap="wrap"
      alignContent="flex-start"
    >
      <Box
        as="section"
        width="sm"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Text fontSize="5xl" fontWeight="bold">
          {heading}
        </Text>
        {text && <SimpleBlockContent blocks={text} />}
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
