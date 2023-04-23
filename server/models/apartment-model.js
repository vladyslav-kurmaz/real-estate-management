const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
    },
    squareArea: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    photos: {
        type: Array,
    },
    status: {
        type: String,
        required: true,
    },
    inhabitant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        default: null,
    },
    paymentDate: {
        type: Date,
    },
})

module.exports = mongoose.model('apartments', apartmentSchema)
