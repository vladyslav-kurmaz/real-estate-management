require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')
const pino = require('pino')
const reminder = require("./utils/cron");

const logger = pino({
    transport: {
        target: process.env.PRETTY_LOGGING,
    },
})

mongoose
    .connect(process.env.CONNECT_URL_DB)
    .then(() => logger.info('DB started'))
    .catch((e) => logger.fatal('DB error ', e))

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)


app.listen(process.env.PORT, () => logger.info('Server started'))

reminder.start()
