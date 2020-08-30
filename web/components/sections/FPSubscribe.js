import React, { useState } from "react";
import { Box, Input, Flex, FormControl, Alert, AlertIcon } from "@chakra-ui/core";
import { AppButton as Button } from "../ui/AppButton";
import jsonp from "jsonp";

export const FPSubscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const sendData = (url) => {
    console.log(`muly:Mailchimp:sendData`, {});
    setStatus("sending");
    setError("");
    jsonp(url, { param: "c" }, (err, data) => {
      console.log(`muly:Mailchimp:`, { err, data });
      if (data.msg.includes("already subscribed")) {
        setStatus("duplicate");
      } else if (err) {
        console.log(`muly:Mailchimp:`, { err });
        setStatus("error");
      } else if (data.result !== "success") {
        setError(data.msg);
        setStatus("error");
      } else {
        setStatus("success");
      }
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const action =
      "https://streemoo.us17.list-manage.com/subscribe/post?u=b7c7d02bdb2c321d89224afca&amp;id=6cc4a77943";
    const values = `EMAIL=${encodeURIComponent(email)}`;
    const path = `${action}&${values}`;
    const url = path.replace("/post?", "/post-json?");
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    !regex.test(email) ? setStatus("empty") : sendData(url);
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
            fontSize="lg"
            isDisabled={status === "success"}
          />
        </form>
      </Box>
      <Box width="100%">
        {status === "sending" && (
          <Alert status="info">
            <AlertIcon />
            Sending...
          </Alert>
        )}
        {status === "success" && (
          <Alert status="success">
            <AlertIcon />
            Thank you for subscribing!
          </Alert>
        )}
        {status === "duplicate" && (
          <Alert status="info">
            <AlertIcon />
            Already subscribed
          </Alert>
        )}
        {status === "empty" && (
          <Alert status="warning">
            <AlertIcon />
            You must write an e-mail.
          </Alert>
        )}
        {error && status === "error" && (
          <Alert status="error">
            <AlertIcon />
            Error: {error}
          </Alert>
        )}
        {!error && status === "error" && (
          <Alert status="error">
            <AlertIcon />
            An unexpected internal error has occurred.
          </Alert>
        )}
      </Box>
    </Flex>
  );
};
