const { Router, response} = require('express')
const productsRoutes = Router()

const multer = require('multer')
const uploadConfigs = require("../configs/upload")

const ProductsController = require('../controllers/ProductsController')
const products = new ProductsController()

const ProductsSearchController = require('../controllers/ProductsSearchController')
const searchProducts = new ProductsSearchController()

const ProductImageController = require('../controllers/ProductImageController')
const productImage = new ProductImageController()

const upload = multer(uploadConfigs.MULTER)

const checkAuth = require("../middlewares/checkAuth")

productsRoutes.use(checkAuth) // Middleware applied to all routes

productsRoutes.post("/", upload.single("image"), products.create)
productsRoutes.get("/index", products.index)
productsRoutes.put("/:id", products.update)
productsRoutes.delete("/:id", products.delete)
productsRoutes.patch("/image/:id", upload.single("image"), productImage.update)

productsRoutes.get("/:id", searchProducts.searchProduct)
productsRoutes.get("/", searchProducts.searchProducts)

module.exports = productsRoutes