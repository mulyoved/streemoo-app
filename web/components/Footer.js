import React from "react";
import { Flex, Image, Link, Text, Stack } from "@chakra-ui/core";
import { footerLinks, social } from "./data";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <Flex as="footer" padding={4} bg="blue.500" color="white" height="110px">
      <Flex
        width={["100%", "100%", "100%", "1200px"]}
        mx="auto"
        align="center"
        justify="space-between"
        wrap="wrap"
      >
        <Stack isInline>
          <Text fontSize="sm" pr="10px">
            © 2020 STREEMOO. All Rights Reserved.
          </Text>
          {social.map((icon) => {
            return (
              <Link key={icon.id} href={icon.href} ml="20px" isExternal>
                <Image size="23px" src={icon.src} alt={icon.alt} />
              </Link>
            );
          })}
        </Stack>
        <Flex width={{ sm: "full", md: "350px", lg: "400px" }} justify={{ sm: "space-around" }}>
          {footerLinks.map((item) => {
            return (
              <NextLink href={item.link} key={item.id}>
                <Link ml={["0", "0", "0", "95px"]} fontSize="sm">
                  {item.title}
                </Link>
              </NextLink>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
