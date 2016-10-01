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

var ArticleSchema=new Schema({
	id:{type:Number},
	title: {type:String},
	detail_pic: {type:String},
	source: {type:String},
	praise:{type:Boolean},
	praise_count:{type:Number},
	comment_count:{type:String},
	content: {type:String},
	tags: {type:String}
});
var ArticleModel=mongoose.model("Article",ArticleSchema);

const CommentSchema=new Schema({
	total_count:{type:Number},
	author:{
		id:{type:Number},
		name:{type:String},
		avatar:{type:String}
	},
	content:{type:String},
	id:{type:Number},
	praise_count:{type:Number},
	praise:{type:Boolean},
	message_count:{type:Number},
	publish_time:{type:Date}
});
var CommentModel=mongoose.model('Comment',CommentSchema);
const CommentsSchema=new Schema({
	total_count:{type:Number},
	comments:[CommentSchema]
})
var CommentsModel=mongoose.model("Comments",CommentsSchema);


