import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import { HeaderInternal } from "../components/HeaderInternal";

export default {
  title: "Layout/Page",
  component: HeaderInternal,
  decorators: [withNextRouter],
};

export const WithShows = (args) => <HeaderInternal />;
