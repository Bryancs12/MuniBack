
import { DataTypes }  from "sequelize";
import { db } from "../db/config.js";
import { PDF_Files } from "./PDFModel.js";

export const Zonificacion = db.define('zonificaciones',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true     
    },
    idUsoSuelo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usosuelos',
            key: 'id'
        }
    },
    idVistoBueno: {
        type: DataTypes.INTEGER,
        //allowNull: false,
        references: {
            model: 'vistosbueno',
            key: 'id'
        }
    },
    zona:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    area:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    tipoRuta:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    zona6:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    afectadoHumedal:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    zmt:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,      
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false, 
        defaultValue: new Date()     
    },
    creador:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    idCreador:{
        type: DataTypes.INTEGER,
        allowNull: false,   
    },
},
    {
        tableName: 'zonificaciones',
        //timestamps: false
    }
);

Zonificacion.hasMany(PDF_Files,{
    foreignKey: 'idZonificacion',
    onDelete: 'cascade',
    hooks: true
});

PDF_Files.belongsTo(Zonificacion, {
    foreignKey: "idZonificacion",
    onDelete: 'cascade',
    hooks: true
});

