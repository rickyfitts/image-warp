const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new CopyPlugin([
            { from: 'assets', to: 'assets' },
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
}
