<<<<<<< HEAD
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }],
    ],
  };
=======
module.exports = {
  presets: ['module:@react-native/babel-preset'],
>>>>>>> 4d02a9435da824bce90b35f4c06a38f35a1201c4
};
