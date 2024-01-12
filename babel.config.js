module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@apis': './src/apis',
          '@app': './src/app',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@store': './src/store',
          '@utils': './src/utils',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
