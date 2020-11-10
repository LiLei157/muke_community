import {checkCode} from '../common/utils'

class LoginController{
    async login(ctx){
        // 接收用户数据
        // 返回token
        const body = ctx.request.body
        // console.log(body);
        let result = await checkCode(body.sid,body.code)
        if(result){
            // 验证用户账号密码是否正确
            
        }
    }
}

export default new LoginController()