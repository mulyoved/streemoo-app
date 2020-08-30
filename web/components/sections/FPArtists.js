import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/core";
import { AppButton as Button } from "../ui/AppButton";
import SimpleBlockContent from "../../components-old/SimpleBlockContent";
import { urlFor } from "../utils";

const artistsList = [
  { id: 1, src: "artist-1", width: "356", gridColumn: "1 / 3" },
  { id: 2, src: "artist-2", width: "362", gridColumn: "3 / 6" },
  { id: 3, src: "artist-8", width: "178" },
  { id: 4, src: "artist-3", width: "354", gridColumn: "2 / 4" },
  { id: 5, src: "artist-6", width: "168" },
  { id: 6, src: "artist-5", width: "268", gridColumn: "1 / 3" },
  { id: 7, src: "artist-7", width: "450", gridColumn: "3 / 5" },
];

export const FPArtists = ({ heading, text, images, backgroundImage }) => {
  return (
    <Box
      as="section"
      width="100%"
      textAlign="center"
      padding={["15px", "15px", "0"]}
      paddingTop="62px"
      backgroundImage={`url("${urlFor(backgroundImage).width(2732).auto("format").url()}")`}
      backgroundRepeat="no-repeat"
      backgroundSize="100% 95%"
    >
      <Heading
        fontSize={["xl", "xl", "2xl", "5xl"]}
        color="purple.900"
        fontWeight="bold"
        mt="88px"
        textTransform="uppercase"
      >
        {heading}
      </Heading>
      <Box width={["500px", "500px", "570px"]} maxWidth="100%" mx="auto">
        <Text fontSize={["sm", "sm", "md"]} color="purple.900" mt="30px" mb="45px">
          <SimpleBlockContent blocks={text} />
        </Text>
      </Box>
      <Box
        width="737px"
        maxWidth="100%"
        mx="auto"
        display={["grid", "grid", "flex", "flex"]}
        flexWrap={{ md: "wrap" }}
        justifyContent={{ md: "space-between" }}
        gridGap={3}
        gridTemplateColumns={[
          "minmax(168px, 100%)",
          "minmax(168px, 100%)",
          "repeat(auto-fill, minmax(168px, 100%))",
          "repeat(auto-fill, minmax(168px, auto))",
        ]}
        gridAutoFlow="dense"
      >
        {images.map((img, idx) => {
          return (
            <Image
              key={idx}
              src={urlFor(img.image)}
              alt={img.image.caption}
              width={{ sm: "100%", md: `${img.width}px` }}
              gridColumn={{ md: img.gridColumn }}
            />
          );
        })}
      </Box>
      <Box
        width="100%"
        height="200px"
        backgroundImage={{ md: "url('line2.png')" }}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
      >
        <Button
          title="View all artists shows"
          mt="80px"
          borderRadius="30px"
          bg="blue.500"
          fontSize="lg"
          height="52px"
          type="button"
          width="280px"
        />
      </Box>
    </Box>
  );
};
