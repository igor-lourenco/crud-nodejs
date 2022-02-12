const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const PORT = 3000

app.set('clientPath', path.join(__dirname, '../..', 'client'))

app.use(express.static(app.get('clientPath')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./users')(app)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
  