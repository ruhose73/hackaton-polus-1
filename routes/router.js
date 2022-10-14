const Router = require("express")
const router = new Router
const AuthRouter = require("./authRouter")

router.use(AuthRouter)

module.exports = router