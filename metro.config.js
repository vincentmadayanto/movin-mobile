const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add external folder to watch and transpile
config.watchFolders = [
  // Add the path to your external components folder
  `${__dirname}/src/components`, // Update this path to the location of your components
];

module.exports = withNativeWind(config, { input: "./global.css" });
