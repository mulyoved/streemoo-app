import PropTypes from "prop-types";
import React, { useState } from "react";
import { Box, Input, Button, Alert, AlertIcon } from "@chakra-ui/core";
import { expandMQ } from "../utils";
import jsonp from "jsonp";

export default function Mailchimp(props) {
  const { heading } = props;
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

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
    <Box
      as="section"
      width="4xl"
      maxWidth="100%"
      display="grid"
      mx="auto"
      gridTemplateColumns={expandMQ("1fr", "1fr 1fr")}
      gridGap={3}
      px={3}
    >
      <Box as="h2" fontSize="2xl" verticalAlign="middle" textAlign="center">
        {heading}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="0.7fr 0.3fr"
        gridGap={3}
        as="form"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email address"
          name="EMAIL"
          type="email"
          required
          size="md"
          borderRadius="full"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
        <Button
          backgroundColor="transparent"
          borderRadius="full"
          type="submit"
          disabled={status === "sending" || status === "success"}
        >
          Subscribe
        </Button>
        <Box gridColumn="span 2">
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
      </Box>
    </Box>
  );
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
};

/*
 */
