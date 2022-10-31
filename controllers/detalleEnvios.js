const {request, response } = require('express')
const { listadoDetalleEnvios   }=require('../models/detalleEnvios');
const{guardarDB,leerDB}=require('../helpers/gestorDB')

const getDetalleEnvios= (req=request,res=response) =>{
    let lista = new listadoDetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postDetalleEnvios =(req = request,res = response) =>{
    let lista = new listadoDetalleEnvios()
    let datosJSON = leerDB('detalleEnvios')
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'detalleEnvios')
    res.send('Registro Creado')
}

 const putDetalleEnvios =(req = request,res = response) => 
 res.send('PUT Endpoint para detalleEnvios')

const deleteDetalleEnvios = (req =request,res =response) => 
res.send('DELETE Endpoint para detalleEnvios')

module.exports ={
    getdetalleEnvios,
    postDetalleEnvios,
    putDetalleEnvios,
    deleteDetalleEnvios
}