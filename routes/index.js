var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var articles=mongoose.model('Articles');
/*
get home page
 */
router.get('/',function(req,res,next){
	res.render('index',{title:"medium-react"});
});
router.get('/articles',function(req,res,next){
	articles.find({},function(err,results){
		if(err){
			console.log('error message',err);
			return;
		}
		res.json(results);
	})
});
module.exports=router;