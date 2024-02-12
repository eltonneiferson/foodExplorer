const knex = require('../database/knex')

const AppError = require('../utils/AppError')

class ProductsSearchController {
    async searchProducts(req, res) {
        const { search } = req.query

        const products = await knex("products").whereLike("name", `%${search}%`)
        
        return res.json(products)
    }

    async searchProduct(req, res){
        const { id } = req.params
        
        const product = await knex("products").where("id", id)
        const ingredients = await knex("ingredients").where({ product_id: id }).orderBy("name")
        
        return res.json({product, ingredients})
    }
}

module.exports = ProductsSearchController