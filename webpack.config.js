var config = {
    entry: "./main.js",
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },

    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                
            }
        ]
    }
}
module.exports = config;