var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./bundle.js",
        sourceMapFilename: "./bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
}