const { Router} = require('express')
const usersRoutes = Router()

const UsersController = require('../controllers/UsersController')
const users = new UsersController()

const checkAuth = require("../middlewares/checkAuth")

usersRoutes.post("/", users.create)
usersRoutes.put("/", checkAuth, users.update)

module.exports = usersRoutes