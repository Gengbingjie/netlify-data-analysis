const DB = require('../../db')
module.exports = async (ctx) => {
    try {
        let data = await DB.query(`select count(*) from ${process.env.NETLIFY_SIGNIN_DATABASE}.userLog`)
        user_amount = data[0]['count(*)']
        let obj = {user_amount}
        ctx.body = { message: '查询成功', data: obj }
    } catch (err) {
        console.log(err)
        ctx.status = 500
        ctx.body = { message: 'query failed' }
    }
}