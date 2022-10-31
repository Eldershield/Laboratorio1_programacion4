const {request, response } = require('express')
const{ListadoSeguimientos}=require('../models/seguimientos')
const{guardarDB,leerDB}=require('../helpers/gestorDB')

const getSeguimientos= (req=request,res=response) =>{
    let lista = new ListadoSeguimientos()
    let datosJSON=leerDB('seguimientos')
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postSeguimientos =(req = request,res = response) =>{
    let lista=new ListadoSeguimientos()
    let datosJSON=leerDB('seguimientos')
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimiento(req.body)
    guardarDB(lista.listadoArr,'seguimientos')
    res.send('Registro Creado')
}

 const putSeguimientos =(req = request,res = response) => 
 res.send('PUT Endpoint para Seguimientos')

const deleteSeguimientos = (req =request,res =response) => 
res.send('DELETE Endpoint para Seguimientos')

module.exports={
    getSeguimientos,
    postSeguimientos,
    putSeguimientos,
    deleteSeguimientos
}