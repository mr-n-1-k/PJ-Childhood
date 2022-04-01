const path = require('path');//path モジュールの読み込み
const SCSS_PATH = PATH.join(__dirname, './src/scss');
const CSS_PATH = PATH.join(__dirname, './src/css');
const TS_PATH = PATH.join(__dirname, './src/ts');
const JS_PATH = PATH.join(__dirname, './src/js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");//MiniCssExtractPlugin の読み込み

module.exports = {

  entry: {
  	'style': JS_PATH + '/index.js',  
  },

  output: { 
	  filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext][query]',
    clean: {
      keep: /index.html/ + /assets\//
    },
  },
  
  module: {
    rules: [
      //SASS 及び CSS 用のローダー
      {
        //拡張子 .scss、.sass、css を対象
        test: /\.(scss|sass|css)$/i, 
        // 使用するローダーの指定（後ろから順番に適用される）
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ], 
      },
      {
        //対象とするアセットファイルの拡張子を正規表現で指定
        test: /\.(png|svg|jpe?g|gif)$/i,
        //画像をコピーして出力
        type: 'asset/resource'  
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: 'style.css',
    }),
  ],
  //source-map タイプのソースマップを出力
  devtool: 'source-map',
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/  //正規表現で指定
  },
  mode: "development",
};