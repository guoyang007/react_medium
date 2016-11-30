var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var articles=db.model('Articles');
var detail=db.model('Detail');
var comments=db.model('Comments');

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
router.get('/article/:id',function(req,res,next){
	var id=req.params.id;
	detail.findOne({id:id},function(err,results){
		if(err){
			console.log('error message',err);
			return;
		}
		res.json(results)

	})

});
router.get('/comments/:id',function(req,res){
	var id=req.params.id;

	comments.findOne({articleId:id},function(err,results){
		if(err){
			console.log('error message',err);
			return;
		}
		res.json(results);
	})
});
router.post('/post_praise',function(req,res){
	console.log(112233,req.body);
	var data=req.body;
	//可以看出数据结构很直观的会影响到数据的查找，这儿的update就稍微复杂了些
	comments.update({'articleId':1,'comments.id':data.id},
		{'comments.$.praise_count':data.praise_count,
				'comments.$.praise':data.praise},
		function(err,results){
			if (err) {
				console.log('error message',err);
				return;
			}
			res.send({
				praise_count:data.praise_count,
				praise:data.praise
			});	
	})
})


module.exports=router;