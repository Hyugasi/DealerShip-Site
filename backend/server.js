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

const vehicleRoutes = require('./routes/vehicleRoutes')
// const descriptionRoutes = require('./routes/descriptionRoutes')

app.use('/vehicles', vehicleRoutes)
// app.use('/descriptions', descriptionRoutes)

app.set('port', PORT)
app.listen(app.get('port'), () => { console.log(`listening on port: ${app.get('port')}`) })