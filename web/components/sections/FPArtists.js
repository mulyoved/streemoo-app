import React from "react";
import { Box, Image, Text, Heading, Button as CButton, Flex } from "@chakra-ui/core";
import { AppButton as Button } from "../ui/AppButton";
import SimpleBlockContent from "../../components-old/SimpleBlockContent";
import { urlFor } from "../utils";

export const FPArtists = ({ heading, text, images, backgroundImage, lineImage }) => {
  const viewAllArtists = () => {
    console.log(`muly:FPArtists:viewAllArtists`, {});
  };

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
        backgroundImage={`url("${urlFor(lineImage).width(2732).auto("format").url()}")`}
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
      >
        <Button
          title="View all artists shows"
          mt="80px"
          borderRadius="30px"
          variantColor="blue"
          fontSize="lg"
          height="52px"
          type="button"
          width="280px"
          onClick={viewAllArtists}
        />
      </Box>
    </Box>
  );
};
