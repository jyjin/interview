
/**
 * api控制器
 *    '/user/*'模块控制器
 * author: jyjin
 * date:   2019.3.2
 * remark:  
 */

// json接口
exports.getUser = async (ctx, next) => {
    ctx.body = {
        res: 1,
        data: {
            name: 'jyjin',
            age: 18
        }
    }
}

// 测试异常捕捉
exports.testError = async (ctx, next) => {
    throw new Error('Some error occured');
}

// text接口
exports.resetPassword = (ctx, next) => {
    ctx.body = 'this is reset password page'
}