const express = require('express')
const cors = require('cors')
const auth = require('./routes/auth')
const events = require('./routes/events')
const { DBconnection } = require('./db/config')
require('dotenv').config()


const app = express();
DBconnection();

app.use( cors() )
app.use(express.json());
app.use( express.static('public') )

app.use('/api/auth', auth)
app.use('/api/calendar', events)


app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
})


app.listen( process.env.PORT , () => {
    console.log(`escuchando en el puerto ${process.env.PORT}`)
})