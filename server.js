const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})