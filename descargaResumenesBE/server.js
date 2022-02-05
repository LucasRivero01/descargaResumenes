require('dotenv').config();
const cors = require('cors')
const express = require('express');
const { dbConnection } = require('./database/config');
class Server {
    constructor() {
        this.consultaPath = '/api/';
        this.app = express();
        this.port = process.env.PORT;
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    async conectarDB() {
        await dbConnection();
    }
    middlewares() {
        // Lectura y parseo del body 
        this.app.use(express.json());
        // Configurar cabeceras y cors
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });

    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }
    routes() {
        this.app.use(this.consultaPath, require('./routes/resumenes'));
    }
}



module.exports = Server;