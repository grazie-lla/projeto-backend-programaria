const mongoose = require('mongoose')

async function connectDatabase() {
    try{
        console.log('Connecting Database')

        await mongoose.connect('mongodb+srv://grazidcosta:N1Mj26HtHSMmAWQ3@clusterwomen.iu6kjah.mongodb.net/?retryWrites=true&w=majority')

        console.log('Database connected')

    } catch(erro) {
        console.log(erro)
    }

}

module.exports = connectDatabase