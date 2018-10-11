const path = require('path');

module.exports = ({ platform }, { module, resolve }) => ({
  entry: `./example/js/index.ts`,
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['module:metro-react-native-babel-preset']
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      ...module.rules
    ]
  },
  resolve: {
    ...resolve,
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    extensions: [
      '.ts',
      '.tsx',
      `.${platform}.ts`,
      '.native.ts',
      `.${platform}.tsx`,
      '.native.tsx',
      ...resolve.extensions
    ]
  }
});
