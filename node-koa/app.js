/**
 * app.js
 * author: jyjin
 * date:   2019.3.1
 * remark:  
 *         Server入口文件
 */
const Koa = require('koa');
const app = new Koa();
const log = require('./server/lib/log')
const routes = require('./server/routes')
const { port } = require('./server/config').server

routes(app)

log.info(`Listen on port ${port}...`)
app.listen(port);