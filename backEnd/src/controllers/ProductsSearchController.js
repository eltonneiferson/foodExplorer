const knex = require('../database/knex')

const AppError = require('../utils/AppError')

class ProductsSearchController {
    async searchProducts(req, res) {
        const { search } = req.query

        if( !search ) {
            throw new AppError("Informe o nome do produto ou o nome de um ingredient do produto!")
        }

        const products = await knex("products")
            .innerJoin("categories", "categories.id", "products.category_id")
            .innerJoin("ingredients", "ingredients.product_id", "products.id")
            .select("products.*","categories.category", knex.raw("GROUP_CONCAT(ingredients.name) as ingredients"))
            .groupBy("products.id")
            .where("products.name", "like", `%${search}%`)
            .orWhere("ingredients.name", "like", `%${search}%`)

        if (!products || products.length === 0) {
            return res.status(404).send("Nenhum produto encontrado!")
        }
        
        return res.json(products)
    }

    async searchProduct(req, res){
        const { id } = req.params
        const product = await knex("products")
            .where({ "products.id": id })
            .innerJoin("categories", "categories.id", "products.category_id")
            .innerJoin("ingredients", "ingredients.product_id", "products.id")
            .select("products.*","categories.category", knex.raw("GROUP_CONCAT(ingredients.name) as ingredients"))
            .first()
        
        return res.json(product)
    }
}

module.exports = ProductsSearchController