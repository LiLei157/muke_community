import { checkCode } from '../common/utils'
import jsonwebtoken from 'jsonwebtoken'
import User from '../model/User'
import config from '../conf/index'

class LoginController{
    async login(ctx){
        // 接收用户数据
        // 返回token
        const body = ctx.request.body
        console.log(body);
        let result = await checkCode(body.sid,body.code)
        if(result){
            // 验证用户账号密码是否正确
            // mongoDB查库操作
            let checkUserPassword = false
            let user = await User.findOne({username:body.username})
            console.log(user);
            if(user === null){
                // 没查到数据
                ctx.body = {
                    code:404,
                    msg:'用户名或密码错误'
                }
                return
            }
            if(user.password === body.password){
                checkUserPassword = true    // 判断用户密码
            }
            if(checkUserPassword){  // mongodb中有数据，并且密码也一样
                // jsonwebtoken.sign(payload,secret,[options])
                let token = jsonwebtoken.sign({_id:user._id},config.JWT_SECRET,{expiresIn:'1h'})
                ctx.body = {
                    code: 200,
                    token:token
                }
            }    
        }
    }
    async register(ctx){
        const body = ctx.request.body
        // 判断验证码是否正确
        let res = await checkCode(body.sid,body.code)
        if(res){
            // 查库，如果查到数据，账户已存在
            let findRes = await User.findOne({username:body.username})
            if(findRes != null){
                ctx.body = {
                    code:-1,
                    msg:'用户已存在'
                }
                return 
            }
            let createRes = await User.create({
                username:body.username,
                password:body.password,
                name:body.name
            })
            if(createRes){
                const {_id,username,name} = createRes
                ctx.body = {
                    code:200,
                    msg:'注册成功',
                    data:{
                        _id,
                        username,
                        name
                    }
                }
            }
        }else{
            ctx.body = {
                code:-1,
                msg:'图片验证码错误'
            }
        }
    }
}

export default new LoginController()