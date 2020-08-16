import React from "react";
import BaseApp from "next/app";
import client from "../client";
// import 'normalize.css'
import "../styles/shared.module.css";
import "../styles/layout.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `;

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    // body: "Lobster",
  },
  colors: {
    ...theme.colors,
    background: theme.colors.gray[200],
  },
};

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then((config) => {
      if (!config) {
        return { pageProps };
      }
      if (config && pageProps) {
        pageProps.config = config;
      }

      return { pageProps };
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default App;
