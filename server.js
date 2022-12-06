const express = require('express')
const Contenedor = require('./DominguezDiego')
const app = express()
const PORT = 8080

const server = app.listen(process.env.PORT || PORT, () => {
    console.log(`server listening on PORT ${PORT}`)
})

server.on('error', err => console.log(`error server on: ${err}`))

const products = new Contenedor('productos.txt')

app.get('/productos', async (req, res) =>{
    const allProducts = await products.getAll()
    res.send(allProducts)
})

app.get('/productoRandom', async(req, res) => {
    const allProducts = await products.getAll()
    let numRandom = Math.floor(Math.random() * allProducts.length)
    res.send(allProducts[numRandom])
})