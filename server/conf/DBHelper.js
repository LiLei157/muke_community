/**
 * @description: Mongodb数据库连接
 */
import mongoose from 'mongoose'
import config from './index'

mongoose.set('useCreateIndex',true)
mongoose.connect(config.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// 连接成功
mongoose.connection.on('connected',()=>{
    console.log(`MongoDB:${config.MONGODB_NAME},DB_HOST:${config.MONGODB_HOSTNAME},DB_PORT:${config.MONGODB_PORT} connection opened!`);
})

// 连接异常
mongoose.connection.on('error',(err) =>{
    console.log("MongoDB connection error : "+err);
})

// 断开连接
mongoose.connection.on('disconnected',() => {
    console.log('MongoDB connection disconnected');
})

export default mongoose

