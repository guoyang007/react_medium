var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var articles=db.model('Articles');
var detail=db.model('Detail');
var comments=db.model('Comments');
var users=db.model('Users');

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
});
router.post('/post_comment',function(req,res){
	var data=req.body;
	console.log(111,data);
	// if (data.isReplyComment) {
	// 	层级好深，不太会找，子评论部分后边再添加
	// }
	//给主comment增加一条记录
	comments.update({'articleId':1},{$push:{'comments':{
				'author' : {
		           'id' : 242,
		           'name' : 'new',
		           'avatar' : 'http://www.qdaily.com/images/missing_face.png'
		        },
			    'praise_count' : 5,
			    'praise' : true,
			    'publish_time' : '2016-08-18 14:28:36 +0800',
			    'content' : 'what the fuck.',
			    'id' : 12
			}}}, {upsert:true},function(err,results){
				if (err) {
					console.log(err)
				}
				console.log("succeed");
				res.json(results);
			})
})

//signup
router.post('/users/signup',function(req,res){
	var data=req.body;
	console.log("signup",data)
	var user = new users(data.user)
	user.save(function(err){
		if (err) {
			console.log(err);
		}else{
			res.redirect('/');
		}
	});
})


module.exports=router;