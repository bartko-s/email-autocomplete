'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function buildConfig(isDevelopment) {
    return {
        mode: 'none',
        cache: isDevelopment,
        devtool: isDevelopment ? 'eval-source-map' : false,
        entry: './lib/email-autocomplete.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'email-autocomplete.min.js',
            libraryTarget: 'umd',
            library: 'EmailAutocomplete',
            publicPath: '/dist'
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    use: 'babel-loader'
                }
            ]
        },
        plugins: isDevelopment ? [
            new webpack.HotModuleReplacementPlugin(),
        ] : [
            new CleanWebpackPlugin(['dist']),
            new UglifyJsPlugin(),
        ],
        devServer: {
            contentBase: './',
            overlay: true,
            hot: true
        },
    };
}

module.exports = buildConfig(process.env.NODE_ENV === 'development');