const reminderModel = require('../controllers/reminder-controller')
const cron = require('cron')
const pino = require('pino')
const sendMessage = require('./send-message')

const logger = pino({
    transport: {
        target: process.env.PRETTY_LOGGING,
    },
})

const reminder = new cron.CronJob({
    cronTime: '0 0 * * *',
    onTick: jobWorker,
})

async function jobWorker() {
    try {
        const currentDate = new Date()
        currentDate.setHours(12, 0, 0, 0)
        const futureDate = new Date(
            currentDate.getTime() + 3 * 24 * 60 * 60 * 1000,
        )

        const users = await reminderModel.getByDate(futureDate)

        for (const user of users) {
            const email = await reminderModel.getEmail(user)
            sendMessage(email)
        }
    } catch (e) {
        logger.error(e)
    }
}

module.exports = reminder
