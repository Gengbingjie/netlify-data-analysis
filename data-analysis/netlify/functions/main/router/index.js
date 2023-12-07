const Router = require('koa-router');

const routeHandler = require('../controller/index')

const router = new Router({
    prefix: '/api'
});
router.get('/signin', routeHandler.signin)
router.get('/invite', routeHandler.invite)

module.exports = router