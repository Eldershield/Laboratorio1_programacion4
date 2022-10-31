const {request, response }=require('express');
const{listadoPrecios}=require('../models/precios');
const{guardarDB,leerDB }=require('../helpers/gestorDB')

const getPrecios= (req=request,res=response) => {
      let lista =new listadoPrecios()
      let datosJSON =leerDB('precios');
      lista.cargarTareasFromArray(datosJSON)
      res.json(lista.listadoArr)
}

const postPrecios= (req=request,res=response) => {
   let lista =new listadoPrecios()
   let datosJSON = leerDB('precios')
   lista.cargarTareasFromArray(datosJSON)
   lista.crearPrecio(req.body)
   guardarDB(lista.listadoArr,'precios')
   res.send('Registro Creado')
}

const putPrecios = (req=request,res=response) => {
    let lista= new listadoPrecios()
    let datosJSON =leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p=>
        p.id==req.params.id?{"id":p.id,...request.body}:p);
        guardarDB(datos,'precios')
        res.send('Registro Actualizado')
}

const deletePrecios = (req=request,res=response) => {
    let lista = new listadoPrecios()
  let datosJSON = leerDB('precios');
  lista.cargarTareasFromArray(datosJSON)

  let data=lista.listadoArr.filter(item=> item.id != req.params.id)
   guardarDB(datos,'precios')
   res.send('Registro Eliminado')
}

module.exports={
    getPrecios,
    postPrecios,
    putPrecios,
    deletePrecios
}