const express = require("express")
const router = express.Router()

const app = express()
const port = 3333

function showWoman (request, response) {
    response.json({
        name: 'Graziella Guedes',
        photo: 'https://media.licdn.com/dms/image/C4D03AQF2yNZ3qZ3ZjQ/profile-displayphoto-shrink_200_200/0/1629249878792?e=1691625600&v=beta&t=m-SD6JpNBj9B2-vRPdGj7V-4JO_QODthEtalRzMZn7o',
        miniBio: 'Desenvolvedora em formação'
    })
}

function showPort() {
    console.log('servidor rodando na porta', port)
}

app.use(router.get('/woman', showWoman))
app.listen(port, showPort)