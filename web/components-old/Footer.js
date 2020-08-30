import React from "react";
import { Box, Flex, Link } from "@chakra-ui/core";
import { expandMQ } from "./utils";
import styles from "./Header.module.css";
import FacebookIcon from "./icons/Facebook";
import InstagramIcon from "./icons/Instagram";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box
      mx="auto"
      px={3}
      pb={6}
      width="4xl"
      maxWidth="100%"
      display="grid"
      gridTemplateColumns="minmax(min-content,max-content) minmax(min-content,1fr) minmax(min-content,max-content) minmax(min-content,max-content)"
      gridGap={3}
    >
      <Box>All Right Reserved</Box>
      <Flex>
        <FacebookIcon />
        <InstagramIcon />
      </Flex>
      <NextLink href="/tbd">
        <Link>Privacy Policy</Link>
      </NextLink>
      <NextLink href="/tbd">
        <Link>Term of Service</Link>
      </NextLink>
    </Box>
  );
};

export default Footer;
