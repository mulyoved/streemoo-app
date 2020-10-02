import { Box } from "@chakra-ui/core";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";

export const AuthSection = () => {
  const [session, loading] = useSession();

  return (
    <Box>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
      )}
    </Box>
  );
};
