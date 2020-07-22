import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import { Box, Grid } from "@chakra-ui/core";

class ScratchPadPage extends React.Component {
  render() {
    const { config } = this.props;

    return (
      <Layout config={config}>
        <Box backgroundColor="blue.100">
          <Grid gridTemplateColumns="repeat(3,1fr)" gridTemplateRows="1fr 1fr 1fr 1.25fr" gap={3}>
            <Box w="100%" h="100%" bg="red.500" gridRow="span 2" gridColumn="span 2">
              <h1>1</h1>
            </Box>
            <Box w="100%" h="100%" bg="blue.500">
              <h1>2</h1>
            </Box>
            <Box w="100%" h="100%" bg="blue.500" gridRow="span 2">
              <h1>3</h1>
            </Box>
            <Box w="100%" h="100%" bg="blue.500">
              <h1>4</h1>
            </Box>
            <Box w="100%" h="100%" bg="blue.500">
              <h1>5</h1>
            </Box>
            <Box w="100%" bg="blue.500">
              <h1>6</h1>
            </Box>
            <Box w="100%" bg="blue.500" gridColumn="span 2">
              <h1>7</h1>
            </Box>
          </Grid>
        </Box>
      </Layout>
    );
  }
}

export default ScratchPadPage;

/*
          <Grid gridTemplateColumns="repeat(3,1fr)" gridTemplateRows="1fr 1fr 1fr 1.25fr" gap={3}>

 */
