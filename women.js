const express = require("express") // iniciando o express
const router = express.Router() //iniciando a rotar
const cors = require('cors') //trazendo pacote cors para consumir a api no front
const databaseConnection = require('./db') //ligando ao arquivo banco de dados
databaseConnection() //chama a funçao que conecta o banco

const Woman = require('./womanModel')
const app = express() //iniciando o app
app.use(express.json())
app.use(cors())
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
        nome: request.body.nome,
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

        if (request.body.nome) {
            womanFound.nome = request.body.nome
        }
    
        if (request.body.miniBio) {
            womanFound.miniBio = request.body.miniBio
        }
    
        if (request.body.photo) {
            womanFound.photo = request.body.photo
        }

        if (request.body.citacao) {
            womanFound.citacao = request.body.citacao
        }

        const editedWoman = await womanFound.save()

        response.json(editedWoman)
    } catch (erro) {
        console.log(erro)
    }
}
//delete
async function deleteWoman(request, response){
    try {
        await Woman.findByIdAndDelete(request.params.id)
        response.json({message: 'woman successfully deleted.'})
    } catch (erro) {
        console.log(erro)
    }
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