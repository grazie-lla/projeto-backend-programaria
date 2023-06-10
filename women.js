const express = require("express")
const router = express.Router()

const app = express()
const port = 3333

const women = [
    {
    name: 'Graziella Guedes',
    photo: 'https://media.licdn.com/dms/image/C4D03AQF2yNZ3qZ3ZjQ/profile-displayphoto-shrink_200_200/0/1629249878792?e=1691625600&v=beta&t=m-SD6JpNBj9B2-vRPdGj7V-4JO_QODthEtalRzMZn7o',
    miniBio: 'Desenvolvedora em formação'
    },
    {
    name: 'Isabelle Silva',
    photo: 'https://media.licdn.com/dms/image/C4E03AQHhd5-qPwa8Qw/profile-displayphoto-shrink_800_800/0/1653684599645?e=1691625600&v=beta&t=2wF54FcErR2PxeSEtbup-QmatKMIT3QEJwYmPuEbcfs',
    miniBio: 'Advogada com mais de 20 anos de experiência e com formação em metodologias ágeis'
    }
]

function showWomen (request, response) {
    response.json(women)
}

function showPort() {
    console.log('servidor rodando na porta', port)
}

app.use(router.get('/women', showWomen))
app.listen(port, showPort)