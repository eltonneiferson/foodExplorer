const { Router } = require('express')

const usersRoutes = require('./users.routes')
const productsRoutes = require('./products.routes')
const ingredientsRoutes = require('./ingredients.routes')
const sessionsRoutes = require('./sessions.routes')

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/products", productsRoutes)
routes.use("/ingredients", ingredientsRoutes)

module.exports = routes