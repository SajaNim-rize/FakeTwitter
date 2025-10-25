const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
<<<<<<< HEAD
const config = {};
=======

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

>>>>>>> 4d02a9435da824bce90b35f4c06a38f35a1201c4
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
