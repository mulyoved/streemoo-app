import React from "react";
import Layout from "../components/Layout";
import { Text, Flex } from "@chakra-ui/core";

export default function TBDPage({ config }) {
  return (
    <Layout config={config}>
      <Flex>More</Flex>
      <Flex justifyContent="center">
        <Text as="h1" fontSize="5xl" fontWeight="bold">
          TBD
        </Text>
      </Flex>
    </Layout>
  );
}
