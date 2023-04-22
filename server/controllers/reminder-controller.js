const apartmentModel = require('../models/apartment-model')
const userModel = require('../models/user-model')
const pino = require('pino')

const logger = pino({
    transport: {
        target: process.env.PRETTY_LOGGING,
    },
})

const getByDate = async (date) => {
    try {
        let futureDate = new Date(date.getTime() + (28 * 24 * 60 * 60 * 1000));
        const users = await apartmentModel.findOneAndUpdate({ paymentDate: date }, {paymentDate: futureDate})

        return users.map(data => ({_id: data._id}))
    } catch (e) {
        logger.error(e)
        return []
    }
}

const getEmail = async (data) => {
    try {
        const user = await userModel.findOne({ _id: data._id })
        return user.email
    } catch (e) {
        logger.error(e)
        return ''
    }
}

module.exports = {getByDate, getEmail}