const express = require("express")
const router = express.Router()

const app = express()
const port = 3333

function showHello(request, response) {
    response.send('hello world')
}

function showPort() {
    console.log('servidor rodando na porta', port)
}

app.use(router.get('/hello', showHello))
app.listen(port, showPort)