require("dotenv").config();

module.exports = {
  name: "tracker-mobile",
  slug: "tracker-mobile",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.tracker",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.tracker",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    [
      "react-native-auth0",
      {
        domain: process.env.AUTH0_DOMAIN,
        customScheme: process.env.AUTH0_SCHEME,
      },
    ],
  ],
  extra: {
    test: process.env.TEST,
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENTID,
  },
};
