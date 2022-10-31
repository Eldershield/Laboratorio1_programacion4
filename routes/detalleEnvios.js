const {Router} = require('express');
const{
    getdetalleEnvios,
    postDetalleEnvios,
    putDetalleEnvios,
    deleteDetalleEnvios
} = require('../controllers/detalleEnvios');

const router = Router();

router.get('/', getdetalleEnvios)
router.post('/', postDetalleEnvios)
router.put('/:id', putDetalleEnvios)
router.delete('/:id',deleteDetalleEnvios )

module.exports=router
