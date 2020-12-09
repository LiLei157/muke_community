import jwt from 'jsonwebtoken'
import config from '../conf/index.js'
import {getValue} from '../conf/RedisConf'

/**
 * @description: 从redis中检查是否有code，如果有验证code是否相等
 * @param {*} key 
 * @param {*} val 
 */
const checkCode = async (key,val) =>{
    let redisData = await getValue(key)     // 根据redis的key sid获取val
    // 通过key没有查到val，表示过期
    if(redisData != null){
        // 获取的val和传的val不相等，也验证失败
        if(redisData.toLowerCase() === val.toLowerCase()){
            return true
        }else {
            return false
        }
    }else {
        return false
    }
}
/* 验证jwt */
const getJWTPayload = async (token)=>{
	return jwt.verify(token.split(' ')[1],config.JWT_SECRET)
}

export {
    checkCode,
	getJWTPayload
}