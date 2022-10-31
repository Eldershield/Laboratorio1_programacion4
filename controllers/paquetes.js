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

const putPaquetes = (req=request,res=response) => {
    let lista= new listadoPaquetes()
    let datosJSON =leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p=>
        p.id==req.params.id?{"id":p.id,...request.body}:p);
        guardarDB(datos,'paquetes')
        res.send('Registro Actualizado')
}

const deletePaquetes = (req=request,res=response) => {
    let lista = new listadoPaquetes()
  let datosJSON = leerDB('paquetes');
  lista.cargarTareasFromArray(datosJSON)

  let data=lista.listadoArr.filter(item=> item.id != req.params.id)
   guardarDB(datos,'paquetes')
   res.send('Registro Eliminado')
}

module.exports ={
    getPaquetes,
    postPaquetes,
    putPaquetes,
    deletePaquetes
}