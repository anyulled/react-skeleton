const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        js: ["webpack/hot/only-dev-server", "react-hot-loader/patch", "./app/index.js"],
        vendor: ["react", "react-dom", "redux", "react-redux", "es6-promise", "react-addons-shallow-compare"]
    },
    resolve: {
        root: path.resolve("app"),
        extensions: ["", ".js"],
        modulesDirectories: ["node_modules"]
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
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify("false")
        }),
        new CleanWebpackPlugin(["dist"]),
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
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([{from: "app/assets", to: "assets"}])
    ]
};