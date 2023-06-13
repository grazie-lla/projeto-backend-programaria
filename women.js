const express = require("express") // iniciando o express
const router = express.Router() //iniciando a rotar
const { v4: uuidv4 } = require('uuid');

const app = express() //iniciando o app
app.use(express.json())
const port = 3333 //criando a porta

//criando lista de mulheres
const women = [
    {
    id: '1',
    name: 'Graziella Guedes',
    photo: 'https://media.licdn.com/dms/image/C4D03AQF2yNZ3qZ3ZjQ/profile-displayphoto-shrink_200_200/0/1629249878792?e=1691625600&v=beta&t=m-SD6JpNBj9B2-vRPdGj7V-4JO_QODthEtalRzMZn7o',
    miniBio: 'Desenvolvedora em formação'
    },
    {
    id: '2',
    name: 'Isabelle Silva',
    photo: 'https://media.licdn.com/dms/image/C4E03AQHhd5-qPwa8Qw/profile-displayphoto-shrink_800_800/0/1653684599645?e=1691625600&v=beta&t=2wF54FcErR2PxeSEtbup-QmatKMIT3QEJwYmPuEbcfs',
    miniBio: 'Advogada com mais de 20 anos de experiência e com formação em metodologias ágeis'
    }
]

//get
function showWomen (request, response) {
    response.json(women)
}

//post
function createWoman(request, response) {
    const newWoman = {
        id: uuidv4(),
        name: request.body.name,
        photo: request.body.photo,
        miniBio: request.body.miniBio,
    }

    women.push(newWoman)

    response.json(women)
}

//patch
function editWoman(request, response) {
    function findWoman(woman) {
        if (woman.id === request.params.id) {
            return woman
        }
    }
    const womanFound = women.find(findWoman)

    if (request.body.name){
        womanFound.nome = request.body.name
    }
    if (request.body.photo){
        womanFound.photo = request.body.photo
    }
    if (request.body.miniBio){
        womanFound.miniBio = request.body.miniBio
    }
    response.json(women)
}
//delete
function deleteWoman(request, response){
    function exceptOneWoman(woman) {
        if (woman.id !== request.params.id) {
            return woman
        }
    }
    const allWomen = women.filter(exceptOneWoman)

    response.json(allWomen)
}

//porta
function showPort() {
    console.log('servidor rodando na porta', port)
}


app.use(router.get('/women', showWomen)) //confirgurado rota get /women
app.use(router.post('/women', createWoman))
app.use(router.patch('/women/:id', editWoman))
app.use(router.delete('/women/:id', deleteWoman))
app.listen(port, showPort) //servidor ouvindo porta