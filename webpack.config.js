const PATH = require('path');

// Автоочистка dist
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// Наименование итоговых файлов в dist
const APPLICATION_FILE_NAME = 'app';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_DEVELOPMENT = !IS_PRODUCTION;

/**
 * Получить имя файла
 *
 * @param {string} exception
 * @return {string}
 */
const getFileName = exception => {
  return APPLICATION_FILE_NAME + '.' + exception;
};

/**
 * Установить loaders
 *
 * @description Влючая ESLint
 * @return {[{loader: string, options: {presets: [string]}}]}
 */
const getLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];

  if (IS_DEVELOPMENT) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

module.exports = {

  // Все исходники
  context: PATH.resolve(__dirname, 'src'),

  // Режим по умолчанию
  mode: 'development',

  // Входные точки для приложения
  entry: ['@babel/polyfill', './index.js'],
  output: {
    globalObject: 'this',
    filename: getFileName('js'),
    path: PATH.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: getLoaders(),
      },
    ],
  },
};
