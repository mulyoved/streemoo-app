import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { Adapter } from "../../../src/nextauth-firebase-adapter";

const options = {
  // Configure one or more authentication providers
  debug: true,

  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  adapter: Adapter({}, {}),
};

export default (req, res) => NextAuth(req, res, options);
