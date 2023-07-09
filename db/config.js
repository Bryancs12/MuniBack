import {Sequelize} from 'sequelize';
import * as dotenv from 'dotenv'
dotenv.config()

export const db = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mariadb'
  });

export const dbConnection = async() =>{
    try {
        await db.authenticate();
        console.log("Conectado a la db")
      } catch (error) {
        console.log(error);
        throw new Error('error al iniciar bd');
      }
}
