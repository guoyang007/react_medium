var express=require('express');
var bodyParser = require('body-parser');

var mongoose=require('mongoose');

global.db=mongoose.connect('mongodb://localhost:27017/mediumReact');
global.dbHandle=require('./models/haddledb.js');

var routes=require('./routes/index');
var app=express();
//body-parser 解析json格式数据
app.use(bodyParser.json({limit: '1mb'}));
//此项必须在 bodyParser.json 下面,为参数编码
app.use(bodyParser.urlencoded({           
  extended: true
}));


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






