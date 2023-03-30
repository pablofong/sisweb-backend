const express = require('express')
const morgan = require('morgan')
import apiRouter from './src/routes'

const app = express()
const port = 3001

app.use(morgan('dev'))
app.use(express.json())
app.use(apiRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})