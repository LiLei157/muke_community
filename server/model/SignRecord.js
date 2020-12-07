import mongoose from '../conf/DBHelper.js'
const Schema = mongoose.Schema

const SignSchema = new Schema({
	uid:{type:String,ref:'users'},	// ref：关联其他表	
})