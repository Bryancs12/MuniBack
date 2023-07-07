
import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
import usoSuelo from './routes/usoSuelo.js'
import vistoBueno from './routes/vistoBueno.js'
import zonificacion from './routes/zonificacion.js'
import users from './routes/users.js'
import interfazTramite from './routes/interfazTramite.js'
import pdfAdjunto from './routes/pdfAdjunto.js'
import { dbConnection } from './db/config.js';
import cors from 'cors'


//creacion del server express
const app = express();

//cors
app.use(cors());

//parsear el body de las request
app.use(express.json());

//probar conexion a db
dbConnection();

//rutas
app.use('/api/usoSuelo', usoSuelo)
app.use('/api/vistoBueno', vistoBueno)
app.use('/api/zonificacion', zonificacion)
app.use('/api/interfazTramite', interfazTramite)
app.use('/api/pdfAdjunto', pdfAdjunto)
app.use('/api/auth', users)


//escuchar las peticiones 
app.listen(process.env.PORT, ()=>{
    console.log(`Server running in port ${process.env.PORT}`)
})

