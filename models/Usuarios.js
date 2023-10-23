const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    contraseña: {
        type: String,
        require: true
    }
})

module.exports = model('Usuario', usuarioSchema)