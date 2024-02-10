const knex = require('../database/knex')

const AppError = require('../utils/AppError')
const { hash, compare } = require('bcryptjs')

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body
        
        if( !name || !email || !password ) {
            throw new AppError("Nome, email e senha são obrigatórios.")
        }

        const [ checkEmail ] = await knex("users").where("email", email)

        if (checkEmail){
            if (checkEmail.email === email) {
                throw new AppError("Usuário já cadastrado!")
            }
        }

        const encryptedPassword = await hash(password, 8)

        await knex("users").insert({name, email, password: encryptedPassword, is_admin: false, status: true})
        
        return res.status(201).json()
    }

    async update(req, res) {
        const { name, email, current_password, new_password } = req.body
        const { id: user_id } = req.user

        if (!name || !email || !current_password || !new_password) {
            throw new AppError("Todos os campos são obrigatórios!")
        }

        const [ user ] = await knex("users").select().where("id", user_id)

        if (!user) {
            throw new AppError("Usuário não encontrado!")
        }
        
        const [ checkEmail ] = await knex("users").select().where("email", email)
        
        if (checkEmail.email == email && checkEmail.id !== user.id) {
            throw new AppError("Este e-mail já está sendo utilizado por outro usuário!")
        }

        if (!current_password || !new_password) {
            throw new AppError("Para alterar a senha você precisa informar a senha atual e a nova senha.")
        }

        if (current_password && new_password) {
            const checkPasswords = await compare(current_password, user.password)

            if(!checkPasswords) {
                throw new AppError("Senha atual invalida!")
            }
        }

        const encryptedPassword = await hash(new_password, 8)

        await knex("users").update({name, email, password: encryptedPassword, updated_at: knex.fn.now()}).where("id", user_id)

        const [ userUpdated ] = await knex("users").select().where("id", user_id)

        return res.json({message: `Dados do(a) usuário(a) ${userUpdated.name} atualizados com sucesso!`})
    }
}

module.exports = UsersController