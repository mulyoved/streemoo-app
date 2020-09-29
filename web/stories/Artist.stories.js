import React from "react";

import ArtistPage from "../components/artist/ArtistPage";

export default {
  title: "Artist/Page",
  component: ArtistPage,
};

const Template = (args) => <ArtistPage {...args} />;

export const WithShows = Template.bind({});
WithShows.args = {};
