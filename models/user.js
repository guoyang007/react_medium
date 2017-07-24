var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt');
var SALT_AROUND=10;

var UsersSchema=new Schema({
	name:{
		unique:true,
		type:String
	},
	password:{
		type:String
	},
	meta:{
		createdAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
});

UsersSchema.pre('save',function(next){
	var user=this;
	if (user.isNew) {
		user.meta.createdAt=user.meta.updateAt=Date.now()
	}else{
		user.meta.updateAt=Date.now()
	}
	bcrypt.genSalt(SALT_AROUND,function(err,salt){
		if(err){
			return next(err)
		}
		bcrypt.hash(user.password,salt,function(err,hash){
			if (err) {return next(err)}
			user.password=hash
			next()
		})
	})
})

var UsersModel=mongoose.model("Users",UsersSchema);

