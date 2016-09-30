var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ArticlesSchema=new Schema({
	id:{type:Number},
	title:{type:String},
	genre:{type:Number},
	source:{type:String},
	praise_count:{type:Number},
	comment_count:{type:Number},
	publish_time:{type:Date},
	banner_pic:{type:String}
});
var ArticlesModel=mongoose.model("Articles",ArticlesSchema);
var ArticlesEntity=new ArticlesModel({
	    "id": 2001,
	    "title": "生活不是等待暴风雨过去而是让我们学会在雨中翩翩起舞，生活不是等待暴风雨过去而是让我们学会在雨中翩翩起舞。",
	    "genre": 1,
	    "source": "片刻",
	    "praise_count": 234,
	    "comment_count": 65,
	    "publish_time":"2016-08-10 14:08:36 +0800",
	    "banner_pic": "/images/grid-article-banner.jpg"
	});
ArticlesEntity.save(function(err){
	console.log('save status:',err?'failed':'success');
})
