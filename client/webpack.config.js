const webpack = require("webpack");
const path = require("path");

var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');


module.exports = {
    entry: {
        js: ["./app/index.js"],
        vendor: ["react", "react-dom", "redux", "react-redux", "es6-promise", "react-addons-shallow-compare", "react-virtualized", "react-formly"]
    },
    devtool: "source-map",
    output: {
        path: __dirname + "/dist",
        filename: "assets/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel",
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/,loaders: ["style", "css", "sass"]},
            { test: /\.less$/,loaders: ['style', 'css', 'less']}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
            filename: "assets/js/vendor.bundle.js"
        }),
        new HtmlWebpackPlugin({
        	  template: __dirname + '/app/index.html',
        	  filename: 'index.html',
        	  inject: 'body'
        	}),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{ from: 'app/assets', to:'assets' }])
        
        /**
         * uncomment the bellow plugins to enable code compression for production
         * this will strip out the debug code and minimize the JS resulting in
         * much smaller output. Compare normal vs. compressed:

         $ webpack
         Hash: c5182d21228467b81050
         Version: webpack 1.13.1
         Time: 9545ms
         Asset     Size  Chunks             Chunk Names
         bundle.js  1.42 MB       0  [emitted]  js
         vendor.bundle.js   831 kB       1  [emitted]  vendor
         bundle.js.map  1.64 MB       0  [emitted]  js
         vendor.bundle.js.map   969 kB       1  [emitted]  vendor
         [0] multi js 28 bytes {0} [built]
         [0] multi vendor 76 bytes {1} [built]
         + 557 hidden modules

         * compressed:

         $ webpack
         Hash: 88b28a395d45d37cef1e
         Version: webpack 1.13.1
         Time: 26838ms
         Asset    Size  Chunks             Chunk Names
         bundle.js  565 kB       0  [emitted]  js
         vendor.bundle.js  168 kB       1  [emitted]  vendor
         [0] multi js 28 bytes {0} [built]
         [0] multi vendor 76 bytes {1} [built]
         + 547 hidden modules
         */
        //   new webpack.DefinePlugin({
        //     "process.env": {
        //       "NODE_ENV": JSON.stringify("production")
        //     }
        //   }),
        //   new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       warnings: false,
        //       screw_ie8: true
        //     },
        //     comments: false,
        //     sourceMap: false
        //   })
    ]
};