const userModel = require('../models/user-model')
const crypto = require('node:crypto')
const jwt = require('jsonwebtoken')
const pino = require('pino')

const logger = pino({
    transport: {
        target: process.env.PRETTY_LOGGING,
    },
})

const registration = async (req, res) => {
    try {
        const {email, fullName, bankDetails, password} = req.body

        const user = await userModel.findOne({ email })

        if (user) {
            return res
                .status(400)
                .send(`User with '${email}' email already exists`)
        }

         const cryptoPassword = crypto
            .pbkdf2Sync(password, process.env.SALT, 2000, 64, 'sha512')
            .toString('hex')

        const newUser = new userModel({
            email,
            fullName,
            bankDetails,
            password: cryptoPassword,
        })

        await newUser.save()

        res.sendStatus(201)
    } catch (e) {
        logger.error(e)
        res.sendStatus(500)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res
                .status(404)
                .send(`User with '${email}' email doesn't exist`)
        }

        const cryptoPassword = crypto
            .pbkdf2Sync(password, process.env.SALT, 2000, 64, 'sha512')
            .toString('hex')

        if (cryptoPassword !== user.password) {
            return res.status(401).send('Invalid password')
        }

        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET_CODE,
            { expiresIn: '30d' },
        )

        res.json({ token })
    } catch (e) {
        logger.error(e)
        res.sendStatus(500)
    }
}

module.exports = {
    registration,
    login,
}
