const { Router } = require('express')
const productsRoutes = Router()

const multer = require('multer')
const uploadConfigs = require("../configs/upload")

const ProductsController = require('../controllers/ProductsController')
const products = new ProductsController()

const upload = multer(uploadConfigs.MULTER)

const checkAuth = require("../middlewares/checkAuth")

productsRoutes.use(checkAuth) // Middleware applied to all routes

productsRoutes.post("/", upload.single("image"), products.create)
productsRoutes.put("/:id", upload.single("image"), products.update)
productsRoutes.delete("/:id", products.delete)
productsRoutes.get("/", products.searchAllProducts)
productsRoutes.get("/:id", products.searchProduct)

module.exports = productsRoutes