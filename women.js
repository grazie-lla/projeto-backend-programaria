const express = require("express") // iniciando o express
const router = express.Router() //iniciando a rotar
const databaseConnection = require('./db') //ligando ao arquivo banco de dados
databaseConnection() //chama a funçao que conecta o banco

const Woman = require('./womanModel')
const app = express() //iniciando o app
app.use(express.json())
const port = 3333 //criando a porta


//get
async function showWomen (request, response) {
    try {
        const womenInDatabase = await Woman.find()

        response.json(womenInDatabase)
    }catch (erro){
    console.log(erro)
}}

//post
async function createWoman(request, response) {
    const newWoman = new Woman({
        name: request.body.name,
        photo: request.body.photo,
        citacao: request.body.citacao,
        miniBio: request.body.miniBio,
    })

    try{
        const createdWoman = await newWoman.save()
        response.status(201).json(createdWoman)
    } catch (erro) {
        console.log(erro)
    }

    

}

//patch
async function editWoman(request, response) {
    try {
        const womanFound = await Woman.findById(request.params.id)

        if (request.body.name){
        womanFound.nome = request.body.name
        }
         if (request.body.photo){
        womanFound.photo = request.body.photo
        }
        if (request.body.citacao){
            womanFound.citacao = request.body.citacao
            }
        if (request.body.miniBio){
        womanFound.miniBio = request.body.miniBio

        const editedWoman = await womanFound.save()
        response.json(editedWoman)

        }
        } catch (erro) {
        console.log(erro)
    }
   
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