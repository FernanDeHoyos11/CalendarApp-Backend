const express = require('express')
const auth = require('./routes/auth')
require('dotenv').config()


const app = express()
app.use(express.json())

app.use( express.static('public') )

app.use('/api/auth', auth)





app.listen( process.env.PORT , () => {
    console.log(`escuchando en el puerto ${process.env.PORT}`)
})