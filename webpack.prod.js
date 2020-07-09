const merge = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin(),
        new FaviconsWebpackPlugin({
            logo: './src/logo.png',
            mode: 'webapp',
            devMode: 'webapp',
            prefix: 'assets/favicons',
            favicons: {
                appName: 'PWA Football Data',
                appShortName: 'Football',
                developerName: 'Fiqri Syah Redha',
                developerURL: 'https://fsr.my.id',
                background: '#fff',
                theme_color: '#1976d2',
                display: 'standalone',
                orientation: 'any',
                scope: '/',
                start_url: '/index.html',
                icons: {
                    coast: false,
                    yandex: false,
                },
            },
        }),
    ],
});
