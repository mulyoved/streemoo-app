import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import Slider from "../Slider";
import PropTypes from "prop-types";

/*
marginTop={["-200px", "-200px", "-250px"]}
pb={["80px", "80px", "200px"]}
pt="115px"
*/

export const FPUpcoming = ({ heading, images }) => {
  return (
    <Box
      as="section"
      backgroundImage={{ md: "url('line1.png')" }}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      overflow="hidden"
    >
      <Box width="960px" maxWidth="100%" mx="auto">
        <Heading
          fontSize={["xl", "xl", "2xl", "5xl"]}
          color="purple.900"
          fontWeight="bold"
          textTransform="uppercase"
          my="8"
          px="15px"
          textAlign="center"
        >
          {heading}
        </Heading>
        <Slider slides={images} />
      </Box>
    </Box>
  );
};

FPUpcoming.propTypes = {
  heading: PropTypes.string,
};
