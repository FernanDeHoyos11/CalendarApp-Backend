
const {Schema, model} = require('mongoose')

const eventSchema = model({
    title:{
        typeo: String,
        require: true
    },
    note:{
        typeo: String,
    },
    start:{
        typeo: Date,
        require: true
    },
    end:{
        typeo: Date,
        require: true
    },
    title:{
        typeo: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
})

module.exports = model('Evento', eventSchema)