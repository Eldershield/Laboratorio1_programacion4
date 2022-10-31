const {v4: uuidv4 }=require('uuid');

class Paquetes{
    constructor(descripcion,peso,volumen,clasificacion){
        this.id=uuidv4,
        this.descripcion=descripcion,
        this.peso=peso,
        this.volumen=volumen,
        this.clasificacion=clasificacion
    }
}

class listadoPaquetes{
    constructor(){
        this._listado={};
    }

    get listadoArr(){
        const listado=[];
        Object.keys(this._listado).forEach(key=>{
            const tarea=this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    cargarTareasFromArray(datos=[]){
        datos.forEach(envio=>{
            this._listado[envio.id]=envio;
        })
    }

    crearPaquete(datos){
        const envio = new Paquetes(
            datos.descripcion,
            datos.peso,
            datos.volumen,
            datos.clasificacion
        );
        this._listado[envio.id]=envio;
    }
}

module.exports={
    listadoPaquetes
}