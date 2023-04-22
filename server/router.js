const Router = require('express')
const userController = require('./controllers/user-controller')
const apartmentController = require('./controllers/apartment-controller')
const {registrationValidation, apartmentValidation} = require('./middleware/validations')
const handleValidationErrors = require('./middleware/handle-validation-errors')
const checkAuth = require('./middleware/check-auth')


const router = new Router()

router.post('/registration', registrationValidation, handleValidationErrors, userController.registration)
router.post('/login', userController.login)

router.post('/apartment', checkAuth, apartmentValidation, handleValidationErrors, apartmentController.create)
router.get('/apartment/:id', apartmentController.getById)
router.patch('/apartment/:id', checkAuth, apartmentController.update)

router.get('/apartments/:status', apartmentController.getByStatus)
router.get('/apartments', apartmentController.getAll)


module.exports = router