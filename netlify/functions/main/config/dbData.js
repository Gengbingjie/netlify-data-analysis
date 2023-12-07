module.exports = {
    // host: '119.45.189.71',
    // user: 'qinzhiyuan',
    // password: '8j8my8XEy5MpAcwT',
    // charset: 'utf8',
    // port: '3306',
    // database: '秦志远测试数据库'
    host: process.env.NETLIFY_DATA_URL,
    user: process.env.NETLIFY_DATA_USERNAME,
    password: process.env.NETLIFY_DATA_PWD,
    charset: 'utf8',
    port: process.env.NETLIFY_DATA_PORT
}