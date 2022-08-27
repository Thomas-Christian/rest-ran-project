//DEPENDNCIES & CONFIG
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const PORT = process.env.PORT

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//CONNECT
mongoose.connect(process.env.MONGO_URI, {family:4}, function(err, connection) {
  console.log('connected to DB')
});

//ROUTES
const placesController = require('./controllers/places')
app.use('/places', placesController)

app.get('/', (req, res) => {
  res.render('Home')
})

app.get('*', (req, res) => {
  res.render('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})



