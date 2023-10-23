const mongoose = require('mongoose');

const DBconnection = async() => {

    try {

       await mongoose.connect(process.env.DB_CONECT);

       console.log('DB ONLINE')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de conectar a la base de datos')
    }
}

module.exports = {
    DBconnection,
}

