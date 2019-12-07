/**
 * 模块路由集合
 *    '/user/*'模块路由集合
 * author: jyjin
 * date:   2019.3.2
 * remark:  
 */
const { prefixRouter } = require('../../lib/routers')
const router = prefixRouter('user')
const jwtAuth = require('../../middleware/jwt-auth.js')
const user = require('./user')

module.exports = (app) => {

    router.get('/', jwtAuth, user.getUser)
    router.get('/error', user.testError)
    router.post('/reset-password',jwtAuth, user.resetPassword)

    app.use(router.routes())
}