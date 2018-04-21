'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const axios=require('axios')
const express=require('express')
const app=express()
const apiRoutes=express.Router()
app.use('/api',apiRoutes)

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app){

      // ====================请求首页轮播图数据=====================
      app.get('/api/getBanner/',function(req,res){
        var url='https://www.duitang.com/napi/mbanner/';
        // let response={'status':1,'data':['han','zhao','wahaha']}
        // return res.json(response)
        axios.get(url,{
          headers:{
            referer:'https://m.duitang.com/',
            host:'www.duitang.com',
            // origin:'https://m.duitang.com',
            // accept:'application/json'
          },
          params:req.query
        }).then((response)=>{
          res.json(response.data)
        }).catch((e)=>{
          console.log(e)
        })

      });


      // =================请求商品首页轮播图数据=================
      app.get('/api/getShopTop/',function(req,res){
        var url='https://www.duitang.com/napi/ad/banner/list/';
        axios.options(url,{
          headers:{
            referer:'https://buy.duitang.com/buy/youliao/?from=mdt_home',
            host:'www.duitang.com',
            origin:'https://buy.duitang.com',
            accessControlRequestMethod:'GET',
            accessControlRequestHeaders:['cacheControl','pragma'],
            cacheControl:'no-cache',
            pragma:'no-cache'
          },
          params:req.query
        }).then((response)=>{
          //**************options之后的再一次请求
          if(response.status==204){
          // console.log(response.status);
          // console.log('duitang返回成功');
          var newParams=Object.assign({},req.query,{ad_id: 'COM001'});
          axios.get(url,{
            headers:{
            referer:'https://buy.duitang.com/buy/youliao/?from=mdt_home',
            host:'www.duitang.com',
            origin:'https://buy.duitang.com',
            accessControlRequestMethod:'GET',
            accessControlRequestHeaders:['cacheControl','pragma'],
            cacheControl:'no-cache',
            pragma:'no-cache'
          },
          params:newParams
          }).then((response)=>{
            res.json(response.data)
          }).catch((e)=>{
            console.log(e)
          })

          }
        //****************
        }).catch((e)=>{
          console.log(e)
        })
      });

      // =============================请求ranking数据=======================
      app.get('/api/getRanking/',function(req,res){
        var url='https://buy.duitang.com/napi/buy/index/module/info/';
        axios.get(url,{
          headers:{
            referer:'https://buy.duitang.com/buy/youliao/?from=mdt_home',
            host:'buy.duitang.com',
          },
          params:req.query
        }).then((response)=>{
          res.json(response.data)
        }).catch((e)=>{
          console.log(e)
        })
      });

      // ========================请求shop页面专栏数据===========================
      app.get('/api/getColumnData/',function(req,res){
        var url='https://buy.duitang.com/napi/buy/index/popular/list/';
        axios.get(url,{
          headers:{
            referer:'https://buy.duitang.com/buy/youliao/?from=mdt_home',
            host:'buy.duitang.com',
          },
          params:req.query
        }).then((response)=>{
          res.json(response.data)
        }).catch((e)=>{
          console.log(e)
        })
      });
      // ==========================获取首页瀑布流数据=============================
      app.get('/api/getWaterFall/',function(req,res){
        var url='https://www.duitang.com/napi/index/hot/';
        axios.get(url,{
          headers:{
            referer:'https://m.duitang.com/',
            host:'www.duitang.com',
            accept: 'application/json',
            origin: 'https://m.duitang.com'
          },
          params:req.query
        }).then((response)=>{
          res.json(response.data)
        }).catch((e)=>{
          console.log(e)
        })
      });


    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
