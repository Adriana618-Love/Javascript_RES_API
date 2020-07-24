const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT||3000);//configurar el puerto
app.set('json spaces',2);//Ver el json identado

//middlewares
app.use(morgan('dev'));//Ver las consultas que llegan
app.use(express.urlencoded({extended:false}));//Not images or similares
app.use(express.json());//Aceptar JSON

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
//Configuro por default una ruta para acceder
app.use('/api/users',require('./routes/users'));

//Starting de server
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});