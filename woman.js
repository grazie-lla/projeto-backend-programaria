const express = require("express")
const router = express.Router()

const app = express()
const port = 3333


function showPort() {
    console.log('servidor rodando na porta', port)
}

app.use(router.get('/woman', showWoman))
app.listen(port, showPort)