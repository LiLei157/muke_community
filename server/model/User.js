/**
 * @description:创建用户模型
 */
import mongoose from '../conf/DBHelper'
const Schema = mongoose.Schema

const UserModel = new Schema({
    username:{
        type:String,    
        index:{unique:true},    // 创建唯一索引
        sparse:true     // 创建稀疏索引
    }
})
