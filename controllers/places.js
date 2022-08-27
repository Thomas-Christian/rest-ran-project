const Express = require('express')
const place = Express.Router()
const Place = require('../models/places.js')

//INDEX
place.get('/', async (req, res) => {
    const foundPlaces = await Place.find().lean()
      res.render('places/index', {
        places: foundPlaces})
    })

/* 
  .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', {message})
    }
    else {
        res.render('404')
    }
    })
})

*/

place.post('/', (req, res) => {
  Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('404')
  })
})

//NEW
place.get('/new', (req, res) => {
  res.render('places/new')
})


//EDIT
place.get('/:id/edit', (req, res) => {
  Place.findById(req.params.id).then((foundPlace) => {
    res.render("places/edit", {
      place: foundPlace
    })
  })
})


//SHOW
place.get('/:id', (req, res) => {
  Place.findById(req.params.id)
  .then((foundPlace) => {
      res.render('places/show', {
        place: foundPlace})
  })
  .catch(err => {
      console.log('err', err)
      res.render('404')
  })
})


//UPDATE
place.put('/:id', (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(
    (updatedPlace) => {
      console.log(updatedPlace)
      res.redirect(`/places/${req.params.id}`)
    })
})


//DELETE
place.delete('/:id', (req, res) => {
  Place.findByIdAndDelete(req.params.id).then((deletedPlace) => {
    res.status(303).redirect("/places")
  })
})




place.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

place.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = place


