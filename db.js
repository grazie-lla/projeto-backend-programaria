const mongoose = require('mongoose')
require('dotenv').config()

async function connectDatabase() {
    try{
        console.log('Connecting Database')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Database connected')

    } catch(erro) {
        console.log(erro)
    }

}

module.exports = connectDatabase