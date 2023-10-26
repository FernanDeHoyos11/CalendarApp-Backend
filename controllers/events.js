const {response} = require('express')

const ObtenerEvento = (req, res=response) => {

    res.status(200).json({
        ok: true,
        msg: 'ObtenerEvento'
    })
}

const CrearEvento = (req, res=response) => {
    
    console.log(req.body)
    
    res.status(200).json({
        ok: true,
        msg: 'CrearEvento'
    })
}

const ActualizarEvento = (req, res=response) => {

    res.status(200).json({
        ok: true,
        msg: 'ActualizarEvento'
    })
}

const EliminarEvento = (req, res=response) => {

    res.status(200).json({
        ok: true,
        msg: 'EliminarEvento'
    })
}

module.exports = {
    ObtenerEvento,
    CrearEvento,
    ActualizarEvento,
    EliminarEvento
}