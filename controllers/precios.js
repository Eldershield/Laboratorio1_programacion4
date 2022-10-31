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

const putPrecios = (req=request,res=response) => 
res.send('PUT Endpoint para precios')

const deletePrecios = (req=request,res=response) => 
res.send('DELETE Endpoint para precios')

module.exports={
    getPrecios,
    postPrecios,
    putPrecios,
    deletePrecios
}