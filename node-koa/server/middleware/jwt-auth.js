
/**
 * 拦截器演示
 * author: jyjin
 * date:   2019.3.1
 * remark:  
 *         可在此对各请求过滤预处理
 */
var getIp = (ctx) => {
    var ip = ctx.ip
    if (~ctx.ip.indexOf('::ffff:')) {
        ip = ctx.ip.replace('::ffff:', '')
    }
    if (~ctx.ip.indexOf('::1')) {
        ip = '127.0.0.1'
    }
    return ip
}
module.exports = async (ctx, next) => {

    log.info('jwtauth:ip', getIp(ctx))
    log.info('jwtauth:path', ctx.path)
    ctx.user = {
        id: 'tokenid-0001',
        name: '金建业'
    }
    return next()
}