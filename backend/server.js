const express = require('express')
const app = express()
const parser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

app.set('port', PORT)
app.listen(app.get('port'), () => { console.log(`listening on port: ${app.get('port')}`) })