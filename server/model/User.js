/**
 * @description:创建用户模型
 */
import mongoose from '../conf/DBHelper'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type:String,    
        index:{unique:true},    // 创建唯一索引
        sparse:true             // 创建稀疏索引
    },
    password:String,
    name:String,
    createTime:{type:Date,default:Date.now},
    updateTime:{type:Date,default:Date.now},
})
// UserSchema.pre('save',(next) =>{
//     // if(!this.create) return new Date() 
//     this.create = new Date()
//     next()
// })

// UserSchema.pre('update', (next) => {
//     this.update = new Date()
//     next()
// })

const UserModel = mongoose.model('user',UserSchema)

export default UserModel