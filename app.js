var express=require('express');

var mongoose=require('mongoose');
global.dbHandle=require('./models/haddledb.js');
global.db=mongoose.connect('mongodb://localhost:27017/mediumReact');

var routes=require('./routes/index');
var app=express();

//nodeJs模板语言，选用ejs，如下配置可正常使用.html文件作为入口
app.engine('.html', require('ejs').__express);
//change the template main catelog
app.set('views',__dirname+'/src');
app.set('view engine','html')

var isDev = process.env.NODE_ENV !== 'production';

if(isDev){
	//require('core-js/fn/object/assign');

	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const config = require('./webpack.config');

	const compiler=webpack(config);

	app.use(webpackDevMiddleware(compiler,{
		publicPath:config.output.publicPath,
		noInfo:true,
		stats:{
			colors:true
		}
	}));
	app.use(webpackHotMiddleware(compiler))

	app.use(express.static(__dirname+'/public'));

	app.use('/',routes);

	app.listen(3000,function(){
		console.log("runing")
	})
}






