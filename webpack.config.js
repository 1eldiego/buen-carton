const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'buen-carton.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['latest-minimal', 'react'],
              plugins: ['transform-object-rest-spread'],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
