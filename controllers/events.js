const {response} = require('express')
const Events = require('../models/Events')

const ObtenerEvento =async (req, res=response) => {

    const evento = await Events.find().populate('user', 'name');
    res.status(200).json({
        ok: true,
        evento
    })
}

const CrearEvento = async (req, res=response) => {
    const evento = new Events(req.body)
    try {

        evento.user = req.uid

        const eventoAgregado = await evento.save()

        res.status(200).json({
            ok: false,
            eventoAgregado
        })
        
    } catch (error) {
         console.log(error)
        res.status(400).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
        
    }

}

const ActualizarEvento = async(req, res=response) => {

    const EventoId = req.params.id;
    const uid = req.uid
    try {

        const evento = await Events.findById(EventoId)

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'No existe evento con ese ID',
            })

        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permiso para editar este evento',
            })
        }

        const nuevoEvento = {
            ...req.body,
            user:uid
        }

        const eventoActualizado = await Events.findByIdAndUpdate(EventoId, nuevoEvento, {new: true})

        res.status(200).json({
            ok: true,
            eventoActualizado
        })
        
    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
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