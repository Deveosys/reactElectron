var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    target: 'electron',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            { test: /\.js$/, include : APP_DIR, loader: 'babel-loader' },
            { test: /\.css$/, include : APP_DIR, loader: 'style-loader!css-loader' },
            { test: /\.less$/, include : APP_DIR, loader: 'style-loader!css-loader!less-loader' },
            {
                test : /\.jsx?$/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: {
                    presets:['stage-1', 'react']
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;