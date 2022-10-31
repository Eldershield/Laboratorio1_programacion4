const {request, response }=require('express');
const{ListadoEnvios}=require('../models/envios');
const{guardarDB,leerDB}=require('../helpers/gestorDB');

const getEnvios= (req=request,res=response) => {
    let lista =new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}


const postEnvios= (req=request,res=response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('registro creado')
}

const putEnvios = (req=request,res=response) => 
res.send('PUT Endpoint para envio')

const deleteEnvios = (req=request,res=response) => 
res.send('DELETE Endpoint para envio')

module.exports={
    getEnvios,
    postEnvios,
    putEnvios,
    deleteEnvios
}