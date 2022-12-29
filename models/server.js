import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketController } from '../sockets/controller.js';

// import { router1 } from '../routes/usuarios.js';

class Servidor {

    constructor() {

        //Aquí lo que se hace es: al crear una instancia del servidor se va a crear la aplicación de Express
        // como una propiedad en la misma clase server.js
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = new Server(this.server);

        this.paths = {} //Las referencias a los path no se necesitarán
        
        // // Conectar a base de datos
        // this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets:...
        this.sockets();
    }

    //Son otras "funciones" que añaden "funcionalidad" al webserver, se ejecutará cada vez que se levanta el server
    middlewares() {

        // CORS: Permite proteger al servidor "superficialmente"
        this.app.use( cors() );
        
        // Directorio Público
        this.app.use( express.static('public') );

    }

    //Aquí se está creando un método de la clase server, donde se definen las rutas
    routes() {
        //this.app.use( this.paths.auth, router2);
    }

    sockets(){

        this.io.on('connection', socketController );
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

export { 
    Servidor
};