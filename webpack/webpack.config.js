const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:{
        'index':"./src/index.js"
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:8081/'
    },
    module:{
       rules:[
           {
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: 'css-loader'
               })
           }, {
               test: /\.(png|jpg|gif)$/,
               use: [{
                   loader: 'url-loader',
                   options: {
                       limit: 500,
                       outputPath: './img/'
                   }
               }]
           },{
               test: /\.(htm|html)$/i,
               loader: 'html-withimg-loader'
           }
       ]
    },
    plugins:[
        new webpack.HashedModuleIdsPlugin(),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:false
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('./css/main.css'),
    ],
    devServer:{
     contentBase: path.resolve(__dirname,'dist'),
     host:'127.0.0.1',
     compress:true,
     port:8881,
     hot:true,
     open:true
    }
}
