/**
 * @description: 针对redis封装的set，get，del方法
 */

import redis from 'redis'
import config from './index'
import {promisifyAll} from 'bluebird'

console.log(config);
const options = {
    host:config.REDIS.host,
    port:config.REDIS.port,
    // password:config.REDIS.password
    detech_buffers:true,    //  开启缓存
    retry_strategy: function(options) {
        if (options.error && options.error.code === "ECONNREFUSED") {
          // End reconnecting on a specific error and flush all commands with
          // a individual error
          return new Error("The server refused the connection");
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
          // End reconnecting after a specific timeout and flush all commands
          // with a individual error
          return new Error("Retry time exhausted");
        }
        if (options.attempt > 10) {
          // End reconnecting with built in error
          return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
      }
}
console.log('Redis conf:'+ JSON.stringify(options));
const client = promisifyAll(redis.createClient(options))


client.on('connnect',()=>{
    console.log('connect success');
})
client.on('error',(error) =>{
    console.log("Redis Error:"+error);
})

const setValue = (key,val,time) =>{
    if(typeof val == 'undefined' || val == null || val == ''){
        return 
    }
    if(typeof val == 'string'){
        if(time !== 'undefined'){
            client.set(key,val,'EX',time)
        }else{
            client.set(key,val)
        }
    }else if(typeof val === 'object'){
        // 往redis中设置对象
        // 假设:redis_key:{key1:val1,key2:val2}
        Object.keys(val).map(item =>{
            client.hset(key,item,val[item],redis.print)
        })
    }
}

const getValue = (key) =>{
    return client.getAsync(key)
}

const getHValue = (key) =>{
    return client.hgetall(key)
}

const delValue = (key) =>{
    client.del(key,(err,res) =>{
        if(res === 1){
            console.log('delete successfully');
        }else{
            console.log('delete error:'+err);
        }
    })
}


export {
    client,
    setValue,
    getValue,
    getHValue,
    delValue
}
