const {response} = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {
    console.log(req.body);

    const { name, email, password } = req.body;

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(200).json({
        msg: 'Registro',
        name,
        email,
        password
    });
}




const loginUsuario = (req, res = response) => {

    const {email, password} = req.body

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }


    res.json({
        name: 'fernan',
        msg: 'login',
        email,
        password
    })
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