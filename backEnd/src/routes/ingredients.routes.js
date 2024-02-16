const { Router } = require('express')
const ingredientsRoutes = Router()

const IngredientsController = require('../controllers/IngredientsController')
const ingredients = new IngredientsController()

const checkAuth = require("../middlewares/checkAuth")

ingredientsRoutes.use(checkAuth) // Middleware applied to all routes

ingredientsRoutes.post("/", ingredients.create)
ingredientsRoutes.get("/:product_id", ingredients.index)
ingredientsRoutes.delete("/:product_id/:ingredient_id", ingredients.delete)

module.exports = ingredientsRoutes