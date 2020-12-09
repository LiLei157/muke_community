import mongoose from '../conf/DBHelper.js'
const Schema = mongoose.Schema

const SignSchema = new Schema({
	uid:{type:String,ref:'users'},	// ref：关联其他表
	created:{type:Date},	// 签到时间
    fav:{type:Number}       // 连续签到天数
})

// Schema.statics 用与挂载静态方法,mongoose自定义的方法不能使用箭头函数
SignSchema.statics = {
	findByUid:function(uid){
		return this.findOne({uid:uid}).sort({created:-1})
	}
}