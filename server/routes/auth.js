const { Router } = require('express')
const auth = require('../controller/auth.controller.js')
const login = require('../controller/login.controller.js')
const router = Router()
router.post('/create', auth)
router.post('/login', login)
module.exports = router
