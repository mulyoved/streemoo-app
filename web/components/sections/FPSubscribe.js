import React, { useState } from "react";
import { Box, Input, Flex, FormControl } from "@chakra-ui/core";
import { AppButton as Button } from "../ui/AppButton";

export const FPSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    setEmail("");
  };

  return (
    <Flex
      as="section"
      mt={{ sm: "0", lg: "100px" }}
      mb={["40px", "40px", "100px"]}
      mx="auto"
      width={["100%", "100%", "100%", "1030px"]}
      maxWidth="100%"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding={4}
    >
      <Box
        fontFamily="Roboto"
        fontStyle="italic"
        fontWeight="bold"
        fontSize={["3xl", "3xl", "3xl", "6xl", "7xl"]}
        lineHeight={["40px", "40px", "60px", "90px"]}
        textTransform="uppercase"
        background="linear-gradient(113.61deg, #6E7FE3 34.79%, #BA25C4 87.76%)"
        style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        Subscribe
        <Box
          fontSize={["2xl", "2xl", "2xl", "5xl", "6xl"]}
          lineHeight={["50px", "50px", "50px", "80px"]}
        >
          to stay tuned
        </Box>
      </Box>
      <Box
        ml={["0", "0", "0", "55px"]}
        width={["100%", "360px", "458px"]}
        mt={["30px", "30px", "0", "0"]}
      >
        <form mb="8px" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <Input
              height={["48px", "48px", "48px", "75px"]}
              placeholder="Email Address"
              borderRadius="11px"
              fontSize={["sm", "sm", "sm", "md"]}
              type="email"
              bg="gray.100"
              variant="filled"
              mb="14px"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </FormControl>
          <Button
            title="Subscribe"
            height={["48px", "48px", "48px", "75px"]}
            borderRadius="11px"
            type="submit"
            width="full"
            bg="purple.500"
            fontSize={["sm", "sm", "sm", "xl"]}
          />
        </form>
      </Box>
    </Flex>
  );
};
