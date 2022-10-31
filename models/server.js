const express= require('express');
const cors =require('cors');

class Server{
    constructor(){
        this.app = express()

        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));
        this.routes();
    }

    routes(){
        this.app.use('/precios',require('../routes/precios'))
        this.app.use('/detalleEnvios',require('../routes/detalleEnvios'))
        this.app.use('/envios',require('../routes/envios'))
        this.app.use('/paquetes',require('../routes/paquetes'))
        this.app.use('/seguimiento',require('../routes/seguimiento'))
    }

    listen(){
        this.app.listen(process.env.PORT,()=>
        console.log("El puerto esta corriendo el puerto TCP"+process.env.PORT))
    }
}

module.exports = Server