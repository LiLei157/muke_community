const errorHandler = (ctx,next) =>{
    return next().catch(err =>{
        if(401 === err.status){
            ctx.body = {
                code:401,
                msg:'Protected resource, use Authorization header to get access\n'
            }
        }else {
            throw err
        }
    })
}

export default errorHandler