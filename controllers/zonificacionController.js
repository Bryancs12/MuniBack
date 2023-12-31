
import { usoSueloData } from "../dataTable/data.js";
import { vistoBuenoData } from "../dataTable/data.js";
import { UsoSuelo } from "../models/usoSueloModel.js";
import { VistoBueno } from "../models/vistoBuenoModel.js";
import { Zonificacion } from "../models/zonificacionModel.js";

export let idEstado = 0;

export const getAllZonificacion = async (request, response) => {

    try {
        const tramites = await Zonificacion.findAll({
            include: {
                model: UsoSuelo,
                attributes: usoSueloData
            }
        });
        return response.status(200).json(
            tramites
        )
    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        })
    }
}

export const getAllZonificacionVB = async (request, response) => {

    try {
        const tramites = await Zonificacion.findAll({
            include: {
                model: VistoBueno,
                attributes: vistoBuenoData
            }
        });

        return response.status(200).json(
            tramites
        )
    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        })
    }
}

//obtener un  tramite
export const getZonificacion = async (request, response) => {

    const id = request.params.id;

    try {
        const tramite = await Zonificacion.findAll({
            where: {
                id
            },
            include: {
                model: UsoSuelo,
                attributes: usoSueloData
            }
        });

        response.json(
            tramite
        );

    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        });
    }
}

//filtro para visualizar solo las zonificaciones creadas por un usuario en especifico mediante su id
export const filterZonificacionByIdCreator = async (request, response) => {

    const idCreador = request.params.idCreador;

    try {
        const tramites = await Zonificacion.findAll({
            where: {
                idCreador
            },
            include: {
                model: UsoSuelo,
                attributes: usoSueloData
            }
        });


        return response.status(200).json(
            tramites
        )
    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        })
    }
}

export const getZonificacionVB = async (request, response) => {

    const id = request.params.id;

    try {
        const tramite = await Zonificacion.findAll({
            where: {
                id
            },
            include: {
                model: VistoBueno,
                attributes: vistoBuenoData
            }
        });

        response.status(200).json(
            tramite
        );

    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        });
    }
}

//crear tramite
export const createZonificacion = async (request, response) => {


    try {
        let zonaFor = "";
        let areaFor = "";

        for (let i = 0; i < request.body.zona.length; i++) {

            zonaFor += request.body.zona[i] + ','
            areaFor += request.body.area[i] + ','
        }



        await Zonificacion.create({
            idUsoSuelo: request.body.idSuelo,
            zona: zonaFor,
            area: areaFor,
            tipoRuta: request.body.tipoRuta,
            zona6: request.body.zona6,
            afectadoHumedal: request.body.afectadoHumedal,
            zmt: request.body.zmt,
            creador: request.body.creador,
            idCreador: request.body.idCreador,

        });

        //await Zonificacion.create(request.body);
        response.status(201).json({
            ok: true,
            "message": "Creado correctamente",
        })
    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        })
    }
}

//crear tramite
export const createZonificacionVB = async (request, response) => {

    try {
        let zonaFor = "";
        let areaFor = "";

        for (let i = 0; i < request.body.zona.length; i++) {

            zonaFor += request.body.zona[i] + ','
            areaFor += request.body.area[i] + ','
        }

        await Zonificacion.create({
            idVistoBueno: request.body.idVistoBueno,
            zona: zonaFor,
            area: areaFor,
            tipoRuta: request.body.tipoRuta,
            zona6: request.body.zona6,
            afectadoHumedal: request.body.afectadoHumedal,
            zmt: request.body.zmt,
            creador: request.body.creador,
            idCreador: request.body.idCreador,
        });

        //await Zonificacion.create(request.body);
        response.status(201).json({
            ok: true,
            "message": "Creado correctamente",
        })
    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        })
    }
}



//update 
export const updateZonificacion = async (request, response) => {

    const id = request.params.id;
    try {
        await Zonificacion.update(request.body, {
            where: {
                id
            }
        })

        response.json({
            ok: true,
            "message": "Actualizado correctamente"
        })
    } catch (error) {
        response.json({
            ok: false,
            message: error.message
        })
    }
}


//delete 
export const deleteZonificacion = async (request, response) => {

    const id = request.params.id;

    try {
        await Zonificacion.destroy({
            where: {
                id
            }
        });

        response.json({
            ok: true,
            "message": "Eliminado correctamente"
        })
    } catch (error) {
        response.status(404).json({
            ok: false,
            message: error.message
        })
    }
}

