const mongoose = require('mongoose')

const womanSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
     citacao: {
        type: String,
        required: true
    },
    miniBio: {
        type: String,
        required: true
    }   
})

module.exports = mongoose.model('diva', womanSchema)