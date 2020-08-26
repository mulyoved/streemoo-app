import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Box, Flex, Text, Image } from "@chakra-ui/core";
import SimpleBlockContent from "../SimpleBlockContent";
import { expandMQ, expandSpan } from "../utils";
import CreditCardIcon from "../icons/CreditCard";
import PayBoxIcon from "../icons/PayBox";
import BitIcon from "../icons/Bit";

function PaymentSection(props) {
  const { heading, label, text } = props;

  return (
    <Box
      mx="auto"
      width="4xl"
      maxWidth="100%"
      display="grid"
      gridTemplateColumns={expandMQ("repeat(1,1fr)", "1fr 1fr 1fr")}
      gridGap={3}
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
      <Flex direction="column" alignItems="center" justifyContent="center">
        <BitIcon />
        <Text mt={3}>Appreciate with bit</Text>
      </Flex>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <PayBoxIcon />
        <Text mt={3}>Appreciate with PayBox</Text>
      </Flex>
      <Flex
        gridColumn={expandSpan(2)}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <CreditCardIcon />
        <Text mt={3}>Appreciate with PayBox</Text>
      </Flex>
    </Box>
  );
}

PaymentSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
};

export default PaymentSection;
