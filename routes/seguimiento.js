const {Router} = requiere('express')
const{
      getSeguimientos,
      postSeguimientos,
      putSeguimientos,
      deleteSeguimientos
}=require('../controllers/seguimientos');

const router = Router();

router.get('/', getSeguimientos)
router.post('/', postSeguimientos)
router.put('/', putSeguimientos)
router.delete('/', deleteSeguimientos)

module.exports=router