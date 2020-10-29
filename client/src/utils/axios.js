import axios from 'axios'
import errorHandler from './errorHandler'

// 创建axios实例
const instance = axios.create({
    baseURL:'/api'
})

//axios请求拦截
instance.interceptors.request.use((config) =>{
    // 请求发送之前对相关配置做一些修改
    return config
},error =>{
    // 错误处理
    errorHandler(error)
    return Promise.reject(error)  
})

// // axios相应拦截
// instance.interceptors.response.use(res =>{
//     if(status === 200){
//         return Promise.resolve(res.data)
//     }else{
//         return Promise.reject(res)
//     }
// },error =>{
//     errorHandler(error)
// })

export default instance