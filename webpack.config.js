const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = 'production';
// const mode = 'development';
const entry = './src/main.js';
const output = path.resolve(__dirname, 'dist');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: false
  }),
];

const legacy = {
  mode,
  entry,
  output: {
    path: output,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: [
                    '> 1% in PL',
                    'last 2 versions',
                    'not IE < 11',
                  ],
                  debug: true,
                  modules: 'cjs',
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                    proposals: true
                  },
                }
              ]
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 3,
                  useESModules: false
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins
};

const modern = {
  mode,
  entry,
  output: {
    path: output,
    filename: '[name].mjs'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true
                  },
                  debug: true,
                  modules: false,
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                    proposals: true
                  }
                }
              ]
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 3,
                  useESModules: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins
}

module.exports = [
  legacy,
  modern
];
