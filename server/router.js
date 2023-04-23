const Router = require('express')
const userController = require('./controllers/user-controller')
const apartmentController = require('./controllers/apartment-controller')
const {
    registrationValidation,
    apartmentValidation,
    updateValidation,
} = require('./middleware/validations')
const handleValidationErrors = require('./middleware/handle-validation-errors')
const checkAuth = require('./middleware/check-auth')

const router = new Router()

router.post(
    '/registration',
    registrationValidation,
    handleValidationErrors,
    userController.registration,
)
router.post('/login', userController.login)

router.post(
    '/apartment',
    checkAuth,
    apartmentValidation,
    handleValidationErrors,
    apartmentController.create,
)
router.get('/apartment/:id', apartmentController.getById)
router.patch(
    '/apartment/:id',
    checkAuth,
    updateValidation,
    handleValidationErrors,
    apartmentController.update,
)
router.get('/apartment/rent/:id', checkAuth, apartmentController.toRent)

router.get('/apartments/status/:status', apartmentController.getByStatus)
router.get('/apartments/name/:name', apartmentController.getByName)
router.get('/apartments', apartmentController.getAll)

router.post('/operations/:id', checkAuth, userController.createOperation)
router.get('/operations/:id', checkAuth, userController.getOperation)
router.get('/apartments/own', checkAuth, userController.getOwnApartments)
router.get('/apartments/rent', checkAuth, userController.getRentApartments)

module.exports = router
