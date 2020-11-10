import svgCaptcha from 'svg-captcha' 
import {setValue} from '../conf/RedisConf'
/**
 * @description:公共Public路径，不需要jwt鉴权
 */

class PublicController{
    /**
     * @description:获取验证码逻辑
     * @param {*} ctx 
     */
    async getCode(ctx){
        const body = ctx.query
        // 生成svg验证码
        const newCaptcha = svgCaptcha.create({
            size:4,
            color:true,
            width:150,
            height:40,
            background:'#f2f2f2',
            noise:Math.floor(Math.random()*5)
        })
        // console.log(typeof setValue, setValue);
        setValue(body.sid,newCaptcha.text,10 * 60)
        ctx.body = {
            code:200,
            data:newCaptcha.data
        }
    }
    
}

export default new PublicController()