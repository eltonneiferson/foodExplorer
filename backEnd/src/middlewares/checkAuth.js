const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function checkAuth(req, res, next) {
    const { authorization } = req.headers // Authorization contains a string with the token: 'Bearer xxxxxxxxxxxxx'

    if (!authorization) {
        throw new AppError("JWT Token not provided.", 401)
    }

    const token = authorization.substring(7) // Returns the excerpt of a string without the 'Bearer ' from the informed position
        
    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret)
                
        req.user = { id: Number(user_id) }
        
        return next()
    } catch {
        throw new AppError("JWT Token invalid.", 401)
    }
}

module.exports = checkAuth