const { body } = require('express-validator')

const messages = {
    email: 'Некоректний email',
    fullName: 'Поле ім\'я прізвище обов\'язкове',
    bankDetails: 'Поле з реквізитами обов\'язкове',
    password: 'Пароль повинен містити мінімум 8 символів',
    name: 'Поле назва для апартаментів повинно містити мінімум 6 та максимум 30 символів',
    description: 'Поле детальніше повинно містити мінімум 30 та максимум 150 символів',
    universal: 'Некоректне поле ',
}
const isValid = (value) => {
    const allowedStatus = ['for-sale', 'appear', 'sold', 'surrendered', 'archived']

    if (!allowedStatus.includes(value)) {
        throw new Error(`Invalid status`)
    }
    return true
}


const registrationValidation = [
    body('email', messages.email).isEmail(),
    body('fullName', messages.fullName).notEmpty(),
    body('bankDetails', messages.bankDetails).notEmpty(),
    body('password', messages.password).isLength(({ min: 8 })),
]

const updateValidation = [
    body('status', messages.universal + 'status').custom(isValid),
]

const apartmentValidation = [
    body('name', messages.name).isLength(({ min: 6, max: 30 })),
    body('description', messages.description).isLength(({ min: 30, max: 150  })),
    body('address', messages.universal + 'address').notEmpty(),
    body('rooms', messages.universal + 'rooms').isNumeric(),
    body('squareArea', messages.universal + 'squareArea').isNumeric(),
    body('price', messages.universal + 'price').isNumeric(),
    body('photos', messages.universal + 'photos').optional().isArray(),
    body('status', messages.universal + 'status').notEmpty(),
]

module.exports = {
    registrationValidation,
    apartmentValidation,
    updateValidation,
}