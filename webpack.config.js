const path = require('path');


module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    target: 'web',
    devServer: {
        host: 'localhost',
        port: "3000",
        static: ["./public"],
        contentBase: path.join(__dirname, 'assets'),
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/
        },
        watchContentBase: true,
        // watching for changes
        watch: true,
        inline: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}