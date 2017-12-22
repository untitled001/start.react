const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src')
};

module.exports = {
    entry: path.join(paths.SRC, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ],
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  use: 'css-loader',
                }),
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
              },            
        ]
    },

    resolve: { 
        modules: ['src', 'node_modules'],        
        extensions: ['.js', '.jsx'] 
    }
};