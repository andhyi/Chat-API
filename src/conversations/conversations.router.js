const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const conversationServices = require('./conversations.services')

require('../middlewares/auth.middleware')(passport)

//? Ruta de informacion propia del usuario loggeado

//? /api/v1/conversations
router.route('/')
    .get(userServices.getUserById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.patchUser
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.deleteUser
    )

//? /api/v1/users/:id
router.route('/:id')
    .get(userServices.getUserById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.patchUser
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        userServices.deleteUser
    )





module.exports = router