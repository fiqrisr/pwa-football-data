const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            meta: {
                description: 'Football data website made with PWA technology',
                'theme-color': '#1976d2',
            },
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/service-worker.js', to: 'service-worker.js' },
                { from: 'src/img', to: 'assets/images/' },
                { from: 'src/favicons', to: 'assets/images/favicons' },
                { from: 'src/manifest.json', to: 'assets/images/favicons' },
            ],
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};
