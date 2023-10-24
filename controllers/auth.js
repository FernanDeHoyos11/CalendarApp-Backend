const {response} = require('express');
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator');
const Usuarios = require('../models/Usuarios');
const { genererJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

try {
    const { name, email, password } = req.body;

    let usuario =  await Usuarios.findOne({email})

    if(usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'un usuario ya existe con ese correo'
        })
    }
    usuario = new Usuarios(req.body)

    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)

    await usuario.save()

    const token = await genererJWT(usuario.id, usuario.name)

    res.status(201).json({
        ok: true,
        uid: usuario.id,
        name: usuario.name,
        email: usuario.email,
        token
    });
    
} catch (error) {
    console.log(error)
    res.status(500).json({
        ok:false,
        msg: 'error, por favor hable con el administrador'
    })
}
}




const loginUsuario = async (req, res = response) => {


    try {
    const { email, password } = req.body;

    const usuario =  await Usuarios.findOne({email})

    if(!usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'el usuario no existe'
        })
    }

    const validarPassword = bcrypt.compareSync(password, usuario.password)

    if(!validarPassword){
        return res.status(400).json({
            ok: false,
            msg: 'contraseña no valida'
        })
    }


    const token = await genererJWT(usuario.id, usuario.name)
    res.json({
        ok: true,
        uid: usuario.id,
        name: usuario.name,
        token
    })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'error, por favor hable con el administrador'
        })
    }



}

const renovarToken = (req, res = response) => {
    res.json({
        name: 'fernan',
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken,
}