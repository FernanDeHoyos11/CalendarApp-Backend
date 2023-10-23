const {response} = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {
    console.log(req.body);

    const { name, email, password } = req.body;


    res.status(200).json({
        msg: 'Registro',
        name,
        email,
        password
    });
}




const loginUsuario = (req, res = response) => {

    const {email, password} = req.body


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