const Express = require('express')
const router = Express.Router()
const Place = require('../models/places.js')
const Comment = require('../models/comment.js')

//SEED
router.get('/seed', async (req, res) => {
  const seedPlaces = require('../seeders/seed-places')
    await Place.insertMany(seedPlaces)
      let place = await Place.findOne({ name: 'H-Thai-ML' })
      let comment = await Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    place.comments.push(comment.id)
    await place.save()


      res.redirect('/places')
})

//INDEX
router.get('/', async (req, res) => {
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

//POST
router.post('/', (req, res) => {
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
router.get('/new', (req, res) => {
  res.render('places/new')
})


//EDIT
router.get('/:id/edit', (req, res) => {
  Place.findById(req.params.id).then((foundPlace) => {
    res.render("places/edit", {
      place: foundPlace
    })
  })
})


//SHOW
router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
  .populate('comments')
  .then((foundPlace) => {
      console.log(foundPlace.comments)
      res.render('places/show', {
        place: foundPlace})
  })
  .catch(err => {
      console.log('err', err)
      res.render('404')
  })
})


//UPDATE
router.put('/:id', (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(
    (updatedPlace) => {
      console.log(updatedPlace)
      res.redirect(`/places/${req.params.id}`)
    })
})


//DELETE
router.delete('/:id', (req, res) => {
  Place.findByIdAndDelete(req.params.id).then((deletedPlace) => {
    res.status(303).redirect("/places")
  })
})

//COMMENT
router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant ? true : false
  Place.findById(req.params.id)
  .then(place => {
      Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('404')
      })
  })
  .catch(err => {
      res.render('404')
  })
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


