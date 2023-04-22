const jwt = require('jsonwebtoken')

const checkAuth = async (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if (!token) {
        return res.status(401).send('Authorization required')
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET_CODE)
        next()
    } catch (e) {
        res.status(401).send('Invalid token')
    }
}

module.exports = checkAuth
