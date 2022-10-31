const {v4: uuidv4}=require('uuid');

class detalleEnvios{
    constructor(idEnvio,idPaquetes){
        this.id=uuidv4,
        this.idEnvio=idEnvio,
        this.idPaquetes=idPaquetes
    }
}

class listadoDetalleEnvios{
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
        datos.forEach(detalleEnvios=> {
            this._listado[detalleEnvios.id]=detalleEnvios;
        })
    }

    crearEnvio(datos){
        const envio = new detalleEnvios(
            datos.idEnvio,
            datos.idPaquetes
        )
        this._listado[envio.id]=envio;
    }
}

module.exports={
    listadoDetalleEnvios
}