const webpack = require("webpack");
const path = require("path");

var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpackUglifyJsPlugin = require("webpack-uglify-js-plugin");


module.exports = {
    entry: {
        js: ["./app/index.js"],
        vendor: ["react", "react-dom", "redux", "react-redux", "es6-promise", "react-addons-shallow-compare", "react-virtualized"]
    },
    devtool: "source-map",
    output: {
        path: __dirname + "/dist",
        filename: "assets/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {test: /\.less$/, loaders: ["style", "css", "less"]}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
            filename: "assets/js/vendor.bundle.js"
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html",
            filename: "index.html",
            inject: "body"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpackUglifyJsPlugin({
            cacheFolder: __dirname,
            debug: false,
            minimize: true,
            sourceMap: true,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([{from: "app/assets", to: "assets"}])
    ]
};