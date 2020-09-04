import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import ReactPlayer from "react-player";
import { urlFor } from "../utils";

export const FPVideo = ({ heading, url, backgroundImage }) => {
  if (url) {
    return (
      <Flex
        justify="center"
        alignContent="center"
        className="player-wrapper"
        backgroundImage={`url("${urlFor(backgroundImage).width(2732).auto("format").url()}")`}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        mt="-20%"
        pt="25%"
        pb="5%"
      >
        <ReactPlayer
          width="100%"
          height="100%"
          url={url}
          config={{
            facebook: {
              appId: "735352713679932",
            },
          }}
        />
      </Flex>
    );
  } else {
    return null;
  }
};
