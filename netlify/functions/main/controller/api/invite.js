const DB = require('../../db')
module.exports = async (ctx) => {

    try {
        //人拉人、里程碑奖励领取数量 
        let prizeNum_result = await DB.query('select count(*), skuId from 秦志远测试数据库.prePrizeCollect GROUP BY skuId')
        let award_info = prizeNum_result.map(item => Object.values(item)).reduce((obj, [num, id]) => { obj[id] = num; return obj }, {})

        //人拉人、里程碑参与人数
        let register_user = await DB.query('SELECT count(*) from 秦志远测试数据库.preRegisterUser')
        register_user = register_user[0]['count(*)']

        //被邀请的人员数量
        let invited_user = await DB.query('SELECT count(*) from 秦志远测试数据库.preRegisterUser  where captainOpenId != ""')
        invited_user = invited_user[0]['count(*)']

        let obj = { award_info, register_user, invited_user }

        ctx.body = { message: '查询成功', data: obj }
    } catch (err) {
        console.log(err)
        ctx.status = 500
        ctx.body = { message: 'query failed' }
    }
}