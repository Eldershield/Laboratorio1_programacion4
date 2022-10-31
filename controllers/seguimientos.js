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

 const putSeguimientos =(req = request,res = response) => {
    let lista= new ListadoSeguimientos()
    let datosJSON =leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p=>
        p.id==req.params.id?{"id":p.id,...request.body}:p);
        guardarDB(datos,'seguimientos')
        res.send('Registro Actualizado')
 }

const deleteSeguimientos = (req =request,res =response) => {
    let lista = new ListadoSeguimientos()
  let datosJSON = leerDB('seguimientos');
  lista.cargarTareasFromArray(datosJSON)

  let data=lista.listadoArr.filter(item=> item.id != req.params.id)
   guardarDB(datos,'seguimientos')
   res.send('Registro Eliminado')
}

module.exports={
    getSeguimientos,
    postSeguimientos,
    putSeguimientos,
    deleteSeguimientos
}