import nodemailer from 'nodemailer'
import config from './index'
import qs from 'qs'

async function send(sendInfo){
    const baseUrl = config.baseUrl
    const route = sendInfo.type === 'email' ? '/cofirm' : '/reset'  // 根据传参中的type类型跳转不同的页面 确认密码：重置密码
    const url = `${baseUrl}/#${route}?` + qs.stringify(sendInfo.data)
    /**
     * sendInfo:
     * {
     *    type:'email' || 'reset',  
     *    code: xxxx,     // 邮箱验证码
     *    user:'',        // 目标人
     *    email:'',        // 目标人邮箱
     *    expire:''       // 验证码过期时间
     * }
     * 
     */
    // 创建实例
    let transport = nodemailer.createTransport({
        host:'smtp.qq.com',
        port: 587,
        secure:false,
        auth:{
            user:'1213564228@qq.com',
            password:'lwzshlavrzvlffhd' 
        }
    })
    // 发送邮件
    transport.sendMail({
        from: '"认证邮件" <1213564228@qq.com>',
        to:sendInfo.email,   // list of receivers    接受者列表
        // 邮件主题
        subject: sendInfo.user !== '' && sendInfo.type !== 'email' ? `您好,${sendInfo.user},${sendInfo.type === 'reset' ? '重置密码' : '注册码'} `
        : '确认修改链接' ,
        text:`您在《慕课社区》注册了账号,验证码是：${sendInfo.code},验证码过期时间：${userInfo.expire}`
    })
}

export default send