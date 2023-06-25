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
  extra: {
    test: process.env.TEST,
    serverUrl: process.env.SERVER_URL,
  },
};
