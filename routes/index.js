var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var articles=mongoose.model('Articles');
var article=mongoose.model('Article');
var comments=mongoose.model('Comments');
var comment=mongoose.model('Comment');
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
// router.get('/article/:id',function(req,res,next){
// 	console.log(11,Article);
// 	article.find({},function(err,results){
// 		if(err){
// 			console.log('error message',err);
// 			return;
// 		}
// 		console.log("article",results);
// 		res.json(results);
// 	})
// });
router.get('/comments',function(req,res,next){

	comments.findOne({},function(err,results){
		if(err){
			console.log('error message',err);
			return;
		}
		res.json(results);
	})
});
router.post('/post_praise',function(req,res,next){
	console.log(112233,req);
	comment.update({id:232},{$set:{praise_count:req.praise_count,praise:true}});
	res.send('post request succeed!');
})


module.exports=router;