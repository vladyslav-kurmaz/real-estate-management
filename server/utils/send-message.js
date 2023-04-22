const nodemailer = require('nodemailer');
const pino = require('pino')

const logger = pino({
    transport: {
        target: process.env.PRETTY_LOGGING,
    },
})


const sendMessage = async (data) => {
    try {
        const message = "Через три дня необхідно буде оплатити квартиру\n"

        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: process.env.LOGIN_EMAIL,
                pass: process.env.PASSWORD_EMAIL
            }
        });

        await transporter.sendMail({
            from: process.env.LOGIN_EMAIL,
            to: data.email,
            subject: 'Нагадування: оплата квартири',
            text: message
        })
        return true
    } catch (e) {
        logger.error(e)
        return false
    }
}

module.exports = sendMessage