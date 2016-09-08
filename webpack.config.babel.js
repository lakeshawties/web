import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                include: path.join(__dirname, 'src')
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    })]
};
