const mongoose = require('mongoose')

const operationSchema = new mongoose.Schema({
    apartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'apartments',
        required: true,
    },
    inhabitant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
})

module.exports = mongoose.model('operations', operationSchema)
