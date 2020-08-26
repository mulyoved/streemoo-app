import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Box, Flex, Text, Image, AspectRatioBox } from "@chakra-ui/core";
import SimpleBlockContent from "../SimpleBlockContent";
import { expandMQ, expandSpan } from "../utils";

const builder = imageUrlBuilder(client);

function ResponsiveGrid(props) {
  const { heading, label, text, images, imagesSize, cta } = props;
  const imagesSizeData = JSON.parse(imagesSize);

  return (
    <Flex
      justifyContent="space-around"
      mx="auto"
      maxWidth="5xl"
      flexWrap="wrap"
      flexDirection="column"
      alignItems="center"
      backgroundColor="background"
      padding={3}
    >
      <Box as="section" width="lg" maxWidth="100%" textAlign="center" paddingBottom={6}>
        <Text fontSize="5xl" fontWeight="bold">
          {heading}
        </Text>
        {text && <SimpleBlockContent blocks={text} />}
      </Box>
      <Box
        width="4xl"
        maxWidth="100%"
        display="grid"
        gridTemplateColumns={expandMQ("repeat(1,1fr)", "repeat(3,1fr)")}
        gridTemplateRows={expandMQ("1fr", "1fr 1fr 1fr 1.25fr")}
        gridGap={3}
      >
        {images.map((image, i) => {
          const width = 344 * (imagesSizeData[i]?.col ? imagesSizeData[i]?.col : 1);
          const height = 240 * (imagesSizeData[i]?.row ? imagesSizeData[i]?.row : 1);
          return (
            <AspectRatioBox
              ratio={width / height}
              key={i}
              width="100%"
              maxWidth={`${width}px`}
              justifySelf="center"
              gridRow={expandSpan(imagesSizeData[i]?.row)}
              gridColumn={expandSpan(imagesSizeData[i]?.col)}
            >
              <Image
                src={builder.image(image).auto("format").height(height).width(width).url()}
                alt={image.alt}
              />
            </AspectRatioBox>
          );
        })}
      </Box>
    </Flex>
  );
}

ResponsiveGrid.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  images: PropTypes.array,
  imagesSize: PropTypes.string,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ResponsiveGrid;
