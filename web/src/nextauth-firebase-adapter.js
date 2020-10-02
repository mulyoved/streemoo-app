import { createHash, randomBytes } from "crypto";

let fakeUser = null;

let fakeSession = {
  expires: 0,
  sessionToken: randomBytes(32).toString("hex"),
  accessToken: randomBytes(32).toString("hex"),
};

const getSavedSession = () => {
  if (!fakeSession.userId) {
    return {};
  } else {
    return {
      ...fakeSession,
    };
  }
};

export const Adapter = (config, options = {}) => {
  async function getAdapter(appOptions) {
    // Display debug output if debug option enabled
    function _debug(...args) {
      if (appOptions.debug) {
        console.log("[next-auth][adapter][debug]", ...args);
      }
    }

    async function createUser(profile) {
      fakeUser = { ...fakeUser, ...profile };
      _debug("createUser", profile, fakeUser);
      return fakeUser;
    }

    async function getUser(id) {
      _debug("getUser", id, fakeUser);
      return fakeUser;
    }

    async function getUserByEmail(email) {
      _debug("getUserByEmail", email, fakeUser);
      return fakeUser;
    }

    async function getUserByProviderAccountId(providerId, providerAccountId) {
      _debug("getUserByProviderAccountId", providerId, providerAccountId, fakeUser);
      return fakeUser;
    }

    async function updateUser(user) {
      fakeUser = { ...fakeUser, ...user };
      _debug("updateUser", user, fakeUser);
      return fakeUser;
    }

    async function deleteUser(userId) {
      _debug("deleteUser", userId);
      return null;
    }

    async function linkAccount(
      userId,
      providerId,
      providerType,
      providerAccountId,
      refreshToken,
      accessToken,
      accessTokenExpires
    ) {
      _debug(
        "linkAccount",
        userId,
        providerId,
        providerType,
        providerAccountId,
        refreshToken,
        accessToken,
        accessTokenExpires
      );
      return null;
    }

    async function unlinkAccount(userId, providerId, providerAccountId) {
      _debug("unlinkAccount", userId, providerId, providerAccountId);
      return null;
    }

    async function createSession(user) {
      fakeSession.userId = user.id;
      _debug("createSession", user, fakeSession);
      return getSavedSession();
    }

    async function getSession(sessionToken) {
      _debug("getSession", sessionToken, fakeSession);
      return getSavedSession();
    }

    async function updateSession(session, force) {
      fakeSession = { ...fakeSession, ...session };
      _debug("updateSession", session, force, fakeSession);
      return getSavedSession();
    }

    async function deleteSession(sessionToken) {
      _debug("deleteSession", sessionToken);
      fakeSession.userId = null;
      return getSavedSession();
    }

    async function createVerificationRequest(identifier, url, token, secret, provider) {
      _debug("createVerificationRequest", identifier);
      return null;
    }

    async function getVerificationRequest(identifier, token, secret, provider) {
      _debug("getVerificationRequest", identifier, token);
      return null;
    }

    async function deleteVerificationRequest(identifier, token, secret, provider) {
      _debug("deleteVerification", identifier, token);
      return null;
    }

    return Promise.resolve({
      createUser,
      getUser,
      getUserByEmail,
      getUserByProviderAccountId,
      updateUser,
      deleteUser,
      linkAccount,
      unlinkAccount,
      createSession,
      getSession,
      updateSession,
      deleteSession,
      createVerificationRequest,
      getVerificationRequest,
      deleteVerificationRequest,
    });
  }

  return {
    getAdapter,
  };
};
