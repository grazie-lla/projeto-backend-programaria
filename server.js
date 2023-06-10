const express = require("express")

const app = express()
const port = 3333

function showPort() {
    console.log('servidor rodando na porta', port)
}

app.listen(port, showPort)