module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        // root: ['./src'],
        // alias: hq.get('babel'),
        alias: {
          // This needs to be mirrored in tsconfig.json
          // '@app': './src/',
          '@app': './src',
          // '@components': './src/components',
          // '@screens': './src/screens',
          // '@navigation': './src/navigation',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.native.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ], // Reanimated must be listed last
};
