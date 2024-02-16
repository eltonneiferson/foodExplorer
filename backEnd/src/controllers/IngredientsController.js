const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class IngredientsController {
    async create(req, res) {
        const { name, product_id } = req.body
        const { id: user_id } = req.user

        const productIngredients = await knex('ingredients').where({ product_id })

        const filterIngredients = productIngredients.filter(ingredient => name === ingredient.name)

        console.log(filterIngredients)

        if (filterIngredients.length > 0) {
            throw new AppError(`Já existe um ingrediente com o nome "${name}" cadastrado para o produto!`)
        } 
        
        await knex("ingredients").insert({name, user_id, product_id, created_at: knex.fn.now()})
        
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
        const { product_id } = req.params

        const ingredients = await knex("ingredients").where({ product_id })

        return res.json({ingredients})
    }
}

module.exports = IngredientsController