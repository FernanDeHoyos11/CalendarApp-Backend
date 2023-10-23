const {Router} = require('express')
const {check} = require('express-validator')
const {crearUsuario, loginUsuario, renovarToken} = require('../controllers/auth')
const { validarcampos } = require('../middlewares/validar_campos')
const router = Router()


router.post(
    '/new', 
    [
     check('name', 'El nombre es obligatorio').not().isEmpty(),
     check('email', 'El email es obligatorio').isEmail(),
     check('password', 'la contraseña debe tener mas de 6 letras').isLength({min: 6}),
     validarcampos
    ],
    crearUsuario )


router.post(
    '/login',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'la contraseña debe tener mas de 6 letras').not().isEmpty(),
        validarcampos
    ],
     loginUsuario )
router.get('/renew', renovarToken )

module.exports = router;