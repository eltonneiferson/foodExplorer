const { Router } = require('express')
const categoriesRoutes = Router()

const CategoriesController = require('../controllers/CategoriesController')
const categories = new CategoriesController()

const checkAuth = require("../middlewares/checkAuth")

categoriesRoutes.use(checkAuth) // Middleware applied to all routes

categoriesRoutes.post("/", categories.create)
categoriesRoutes.get("/", categories.index)

module.exports = categoriesRoutes