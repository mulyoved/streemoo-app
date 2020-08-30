import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import Slider from "../Slider";
import PropTypes from "prop-types";

export const FPUpcoming = ({ heading, images }) => {
  return (
    <Box
      as="section"
      backgroundImage={{ md: "url('line1.png')" }}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      pb={["80px", "80px", "200px"]}
      pt="115px"
      marginTop={["-200px", "-200px", "-250px"]}
      overflow="hidden"
    >
      <Box width="960px" maxWidth="100%" mx="auto">
        <Heading
          fontSize={["xl", "xl", "2xl", "5xl"]}
          color="purple.900"
          fontWeight="bold"
          mt="88px"
          mb="48px"
          textTransform="uppercase"
          px={["0", "15px", "15px", "0"]}
          textAlign={{ sm: "center", md: "left" }}
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
