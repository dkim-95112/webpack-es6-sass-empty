import path, {resolve} from "path";

const webConfig = {
  target: 'web',
  context: path.resolve('.'),
  entry: {
    landing: './client/index.js'
  },
  output: {
    path: path.resolve('./client/build/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./client/index.js'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
    ]
  }
}

module.exports = webConfig