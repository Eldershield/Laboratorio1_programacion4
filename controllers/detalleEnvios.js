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

 const putDetalleEnvios =(req = request,res = response) => {
    let lista= new listadoDetalleEnvios()
    let datosJSON =leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p=>
        p.id==req.params.id?{"id":p.id,...request.body}:p);
        guardarDB(datos,'detalleEnvios')
        res.send('Registro Actualizado')
 }

const deleteDetalleEnvios = (req =request,res =response) => {
    let lista = new listadoDetalleEnvios()
  let datosJSON = leerDB('detalleEnvios');
  lista.cargarTareasFromArray(datosJSON)

  let data=lista.listadoArr.filter(item=> item.id != req.params.id)
   guardarDB(datos,'detalleEnvios')
   res.send('Registro Eliminado')
}

module.exports ={
    getDetalleEnvios,
    postDetalleEnvios,
    putDetalleEnvios,
    deleteDetalleEnvios
}