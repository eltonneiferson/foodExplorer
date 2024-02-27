const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class CategoriesController {
    async create(req, res) {
        const { category } = req.body
        const { id: user_id } = req.user

        await knex("categories").insert({category, user_id, created_at: knex.fn.now()})
        
        return res.status(201).send()
    }

    async delete(req, res) {
        const { product_id, ingredient_id } = req.params

        const productIngredients = await knex('ingredients').where({ product_id })

        if (productIngredients.length == 1) {
            throw new AppError("É preciso ter pelo menos um ingrediente cadastrado para o produto!")
        }        
        
        await knex('ingredients').where({ id: ingredient_id }).del()

        return res.status(200).json()
    }

    async index(req, res) {
        const categories = await knex("categories")

        return res.json({categories})
    }
}

module.exports = CategoriesController