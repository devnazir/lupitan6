const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
require('dotenv').config({path: './apikey.env'})

app.use(cors({ origin: '*' }))

app.get('/', (req, res) => {
    res.json({err: 'error'})
})

app.get('/top-headlines', async (req, res) => {
    const response = await (await axios (`https://newsapi.org/v2/top-headlines?country=id&apikey=${process.env.APIKEY}`)).data
    res.json({response})
})

app.listen(process.env.PORT || 8000, () => console.log("Server work at localhost:8000"))