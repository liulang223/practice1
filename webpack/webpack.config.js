const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob=require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry = require('./webpack_config/entry_webpack.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: entry,
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
                   loader:'babel-loader',//cnpm install -D babel-loader@7 babel-core babel-preset-env
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
            paths:glob.sync(path.resolve(__dirname,'src/*.html'))
          }),
        new webpack.BannerPlugin('知否知否，应是绿肥红瘦'),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
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
