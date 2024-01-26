const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('@splunk/webpack-configs/base.config').default;

module.exports = webpackMerge(baseConfig, {
    entry: path.join(__dirname, 'demo'),
    output: {
        path: path.join(__dirname, 'splunk-app/appserver/static/pages/'),
        filename: 'demo.js',
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }, { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
        ],
    },

});