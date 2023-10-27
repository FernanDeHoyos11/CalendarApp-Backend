
const {Router} = require('express');
const { ObtenerEvento, CrearEvento, ActualizarEvento, EliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar_jwt');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarcampos } = require('../middlewares/validar_campos');



const router = Router();

router.use(validarJWT)

router.get('/', ObtenerEvento)
router.post(
    '/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'la fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'la fecha de finalizacion es obligatoria').custom( isDate ),
        validarcampos
    ],
    CrearEvento)
router.put('/:id', ActualizarEvento)
router.delete('/:id', EliminarEvento)

module.exports = router
