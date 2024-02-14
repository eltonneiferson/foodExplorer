const knex = require('../database/knex')

const AppError = require('../utils/AppError')

class ProductsSearchController {
    async searchProducts(req, res) {
        const { search } = req.query

        const products = await knex("products").whereLike("name", `%${search}%`)

        if (!products || products.length === 0) {
            return res.status(404).send("Nenhum produto encontrado!")
        }
        
        return res.json(products)
    }

    async searchProduct(req, res){
        const { id } = req.params
        const [product] = await knex("products").where("id", id)
        const [category] = await knex("categories").where({ id: product.category_id})
        const ingredients = await knex("ingredients").where({ product_id: id }).orderBy("name")
        
        return res.json({product, category, ingredients})
    }
}

module.exports = ProductsSearchController