require('dotenv').config()
const path = require('path')
const express = require('express')
const { SERVER_PORT } = process.env

const app = express()

app.use(express.static(`${__dirname}/../build`))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => {
  console.log(`Server ready on port ${SERVER_PORT}`)
})