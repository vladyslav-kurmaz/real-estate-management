const apartmentModel = require('../models/apartment-model')
const jwt = require('jsonwebtoken')
const pino = require('pino')

const logger = pino({
    transport: {
        target: process.env.PRETTY_LOGGING,
    },
})

const create = async (req, res) => {
    try {
        const {name, description, address, rooms, squareArea, price, photos, status} = req.body

        const token = req.headers.authorization.replace(/Bearer\s?/, '')
        const decoded = jwt.decode(token, { verify: false })

        const newApartment = new apartmentModel({
            owner: decoded._id,
            name,
            description,
            address,
            rooms,
            squareArea,
            price,
            photos,
            status
        })

        await newApartment.save()

        res.sendStatus(201)
    } catch (e) {
        logger.error(e)
        res.sendStatus(500)
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params

        const apartment = await apartmentModel.findOne({ _id: id })

        if (!apartment) {
            return res
                .status(404)
                .send(`Apartment doesn't exist`)
        }

        res.json(apartment)
    } catch (e) {
        logger.error(e)
        res.sendStatus(500)
    }

}
const getApartmentsByFilter = async (req, res, filter) => {
    try {
        const { page } = req.query
        const pageNumber = parseInt(page) || 1
        const limitNumber = 10
        const totalApartmentsCount = await apartmentModel.countDocuments(filter)
        const totalPages = Math.ceil(totalApartmentsCount / limitNumber)

        if (page > totalPages) {
            return res.status(404).send(`Page doesn't exist`)
        }

        const apartments = await apartmentModel
            .find(filter)
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber)

        if (apartments.length === 0) {
            return res.status(404).send(`Apartments don't exist`)
        }

        return res.json({
            apartments,
            totalPages,
            currentPage: pageNumber,
            totalApartments: totalApartmentsCount,
        })
    } catch (e) {
        logger.error(e)
        res.sendStatus(500)
    }
}

const getByStatus = async (req, res) => {
    const filter = { status: req.params.status }
    await getApartmentsByFilter(req, res, filter)
}

const getByName = async (req, res) => {
    const filter = { name: { $regex: new RegExp(req.params.name, 'i') } }
    await getApartmentsByFilter(req, res, filter)
}

const getAll = async (req, res) => {
    const filter = { status: { $ne: "Archived" } }
    await getApartmentsByFilter(req, res, filter)
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const {status} = req.body
        await apartmentModel.updateOne({ _id: id }, {status})

        res.sendStatus(200)
    } catch (e) {
        logger.error(e)
        res.sendStatus(500)
    }
}


const toRent = async (req, res) => {
    try {
        const { id } = req.params
        const token = req.headers.authorization.replace(/Bearer\s?/, '')
        const decoded = jwt.decode(token, { verify: false })

        const newPaymentDate = new Date();
        newPaymentDate.setHours(12, 0, 0, 0);
        newPaymentDate.setDate(newPaymentDate.getDate() + 4);

        await apartmentModel.updateOne({ _id: id }, { inhabitant: decoded._id, status: "surrendered", paymentDate: newPaymentDate})

        res.sendStatus(200)
    } catch (e) {
        logger.error(e)
        res.sendStatus(500)
    }
}

module.exports = {
    create,
    getById,
    getByStatus,
    getByName,
    getAll,
    update,
    toRent,
}