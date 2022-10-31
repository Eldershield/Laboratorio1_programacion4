const {Router} = require('express')
const{
      getSeguimientos,
      postSeguimientos,
      putSeguimientos,
      deleteSeguimientos
}=require('../controllers/seguimientos');

const router = Router();

router.get('/', getSeguimientos)
router.post('/', postSeguimientos)
router.put('/:id', putSeguimientos)
router.delete('/:idS', deleteSeguimientos)

module.exports=router