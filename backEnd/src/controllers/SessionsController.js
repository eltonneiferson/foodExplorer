const knex = require('../database/knex')

const AppError = require('../utils/AppError')
const { compare } = require('bcryptjs')
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

class SessionsController {
    async create(req, res) {
        const { email, password } = req.body

        if (!email || !password) {
            throw new AppError("Informe um usuário e senha.")
        }
        
        const user = await knex("users").where("email", email).first()

        if(!user){
            throw new AppError("E-mail e/ou senha inválidos!", 401)
        }
        
        const checkPassword = await compare(password, user.password)

        if (!checkPassword) {
                throw new AppError("E-mail e/ou senha inválidos!", 401)
        }

        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, { subject: String(user.id), expiresIn})

        return res.json({ user, token })
    }
}

module.exports = SessionsController