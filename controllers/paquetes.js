const {request, response }=require('express');
const {listadoPaquetes}=require('../models/paquetes');
const {guardarDB,leerDB}=require('../helpers/gestorDB')
const getPaquetes= (req=request,res=response) => {
    let lista =new listadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postPaquetes= (req=request,res=response) =>{
    let lista=new listadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPaquete(req.body)
    guardarDB(lista.listadoArr,"paquetes")
    res.send('Registro Creado')
}

const putPaquetes = (req=request,res=response) => 
res.send('PUT Endpoint para paquetes')

const deletePaquetes = (req=request,res=response) => 
res.send('DELETE Endpoint para paquetes')

module.exports ={
    getPaquetes,
    postPaquetes,
    putPaquetes,
    deletePaquetes
}