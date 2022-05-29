const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoute = '/api/user';

    //Middlewares
    this.middlewares();

    //Rutas
    this.routes();
  }
  middlewares(){
    
    //CORS
    this.app.use(cors());

    //Parseo y lectura body
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({extended: false}))

    //Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersRoute, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidior iniciado en puerto', this.port);
    });
  }
}

module.exports = Server;