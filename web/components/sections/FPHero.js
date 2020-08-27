import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import { AppHeading as Heading } from "../ui/AppHeading";
import PropTypes from "prop-types";
import SimpleBlockContent from "../../components-old/SimpleBlockContent";
import { urlFor } from "../utils";

export const FPHero = ({ heading, text, backgroundImage }) => {
  return (
    <Flex
      as="header"
      width="100%"
      flexWrap="wrap"
      backgroundImage={`url("${urlFor(backgroundImage).width(2732).auto("format").url()}")`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="cover"
      display="flex"
      direction="column"
      overflow="hidden"
    >
      <Box
        d="flex"
        justify="center"
        alignItems="center"
        flexDirection="column"
        pt={["30px", "30px", "50px", "80px"]}
        pb={["320px", "320px", "580px", "580px"]}
        color="white"
        overflow="hidden"
        mx="auto"
        width="90%"
      >
        <Heading title={heading} fontSize="5xl" />
        {text && (
          <Text
            width={["full", "full", "lg", "660px"]}
            textAlign="center"
            fontSize="lg"
            px={2}
            pt={2}
          >
            <SimpleBlockContent blocks={text} />
          </Text>
        )}
      </Box>
    </Flex>
  );
};

FPHero.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.array,
  backgroundImage: PropTypes.object,
};
