const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style!css?sourceMap'
        }]
    }
};
