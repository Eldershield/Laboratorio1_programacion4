const {Router} = requiere('express')
const{
      getPrecios,
      postPrecios,
      putPrecios,
      deletePrecios
}=require('../controllers/precios');
const router = Router();

        router.get('/', getPrecios)
        router.post('/', postPrecios)
        router.put('/', putPrecios)
        router.delete('/', deletePrecios)
        
module.exports=router
