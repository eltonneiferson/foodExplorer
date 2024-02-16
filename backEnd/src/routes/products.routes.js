const { Router } = require('express')
const productsRoutes = Router()

const multer = require('multer')
const uploadConfigs = require("../configs/upload")

const ProductsController = require('../controllers/ProductsController')
const products = new ProductsController()

const ProductsSearchController = require('../controllers/ProductsSearchController')
const searchProducts = new ProductsSearchController()

const upload = multer(uploadConfigs.MULTER)

const checkAuth = require("../middlewares/checkAuth")

productsRoutes.use(checkAuth) // Middleware applied to all routes

productsRoutes.post("/", upload.single("image"), products.create)
productsRoutes.get("/index", products.index)
productsRoutes.put("/:id", upload.single("image"), products.update)
productsRoutes.delete("/:id", products.delete)

productsRoutes.get("/:id", searchProducts.searchProduct)
productsRoutes.get("/", searchProducts.searchProducts)

module.exports = productsRoutes