const {Router} = requiere('express');
const{
    getdetalleEnvios,
    postDetalleEnvios,
    putDetalleEnvios,
    deleteDetalleEnvios
} = require('../controllers/detalleEnvios');

const router = Router();

router.get('/', getdetalleEnvios)
router.post('/', postDetalleEnvios)
router.put('/', putDetalleEnvios)
router.delete('/',deleteDetalleEnvios )

module.exports=router
