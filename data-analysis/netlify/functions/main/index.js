const Koa = require('koa');
const session = require('koa-session');

const router = require('./router')

const app = new Koa();

app.use(session({ signed: false }, app));
app.use(router.routes()).use(router.allowedMethods());
module.exports = app