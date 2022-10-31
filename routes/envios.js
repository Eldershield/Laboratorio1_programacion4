const {Router} = requiere('express')

const{
    getEnvios,
    postEnvios,
    putEnvios,
    deleteEnvios
} =require('../controllers/envios');
const router = Router();

router.get('/',getEnvios )
router.post('/',postEnvios )
router.put('/',putEnvios )
router.delete('/',deleteEnvios )

module.exports=router
