import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}
