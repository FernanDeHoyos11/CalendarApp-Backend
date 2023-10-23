const express = require('express')
const auth = require('./routes/auth')
const { DBconnection } = require('./db/config')
require('dotenv').config()


const app = express();
DBconnection();

app.use(express.json());
app.use( express.static('public') )

app.use('/api/auth', auth)





app.listen( process.env.PORT , () => {
    console.log(`escuchando en el puerto ${process.env.PORT}`)
})