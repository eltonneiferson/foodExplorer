const knex = require('../database/knex')
const DiskStorage = require("../providers/DiskStorage")
const AppError = require('../utils/AppError')

class ProductsController {
    async create(req, res) {
        const { name, description, price, category_id } = req.body
        const imageProduct = req.file.filename
        const ingredients = JSON.parse(req.body.ingredients)
        const { id: user_id } = req.user
        
        if( !name || !description || !price || !ingredients || !category_id ) {
            throw new AppError("Todos os campos são obrigatórios!")
        }
        
        const diskStorage = new DiskStorage()
        const image = await diskStorage.saveFile(imageProduct)
        
        const [product_id] = await knex("products").insert({name, description, price, image, category_id, user_id})

        const ingredientsInsert = ingredients.map(ingredient => {
            return {
                product_id,
                user_id,
                name: ingredient
            }
        })
        
        await knex("ingredients").insert(ingredientsInsert)
        
        return res.status(201).send()
    }

    async update(req, res) {
        const { name, description, price, ingredients } = req.body
        const { id } = req.params

        if (!name || !description || !price) {
            throw new AppError("Todos os campos são obrigatórios!")
        }

        const [ product ] = await knex("products").select().where("id", id)

        if (!product) {
            throw new AppError("Produto não encontrado!")
        }

        await knex("products").update({name, description, price, updated_at: knex.fn.now()}).where("id", id)

        const [ productUpdated ] = await knex("products").where("id", id)
        const productIngredients = await knex("ingredients").where({ product_id: id }).orderBy("name")

        return res.json({ ...productUpdated, productIngredients })
    }

    async delete(req, res) {
        const { id } = req.params

        const [ product ] = await knex('products').select().where("id", id)
        const productIngredients = await knex("ingredients").select().where({ product_id: id }).orderBy("name")
        const productCategory = await knex("categories").select().where({ product_id: id })

        if (!product) {
            throw new AppError("Produto não encontrado!")
        }

        await knex('products').where("id", id).del()

        return res.json({...product, productCategory, productIngredients})
    }

    async index(req, res) {
        const categories = await knex("categories").select()
        const products = await knex("products").select()

        return res.json({categories, products})
    }
}

module.exports = ProductsController