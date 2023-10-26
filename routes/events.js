
const {Router} = require('express');
const { ObtenerEvento, CrearEvento, ActualizarEvento, EliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar_jwt');



const router = Router();

router.use(validarJWT)

router.get('/', ObtenerEvento)
router.post('/', CrearEvento)
router.purge('/:id', ActualizarEvento)
router.delete('/:id', EliminarEvento)

module.exports = router
