const {response} = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req, res = response, next) => {

    const token = req.header('x-token')

    if(!token){
        return res.status(401).json({
            ok: 'false',
            msg: 'no hay token en la peticion'
        })
    }

    next()
}

module.exports = {
    validarJWT
}