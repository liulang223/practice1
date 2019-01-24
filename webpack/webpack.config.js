const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
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
                   use: [{
                       loader: 'css-loader',
                       options: {importLoaders: 1}
                   },'postcss-loader']
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
           },{
               test:/\.scss/,
               use: ExtractTextPlugin.extract({
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
               })
              
           },{
               test:/\.(jsx|js)$/,
               use:{
                   loader:'bable-loader',
                   options:{
                       presets:[
                           'env','react'
                       ]
                   }
               },
               exclude:/node_modules/
           }
       ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:false
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('./css/main.css'),
        new PurifyCSSPlugin({
            pashs: glob.sync(path.join(__dirname, 'src/*.html')),
        })
    ],
    devServer:{
     contentBase: path.resolve(__dirname,'dist'),
     host:'127.0.0.1',
     compress:true,
     port:8081,
     hot:true,
     open:true
    }
}
