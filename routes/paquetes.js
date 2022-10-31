const {Router} = requiere('express')
const{
      getPaquetes,
      postPaquetes,
      putPaquetes,
      deletePaquetes
}= require('../controllers/paquetes');
const router = Router();

router.get('/', getPaquetes)
router.post('/', postPaquetes)
router.put('/', putPaquetes)
router.delete('/',deletePaquetes)

module.exports=router