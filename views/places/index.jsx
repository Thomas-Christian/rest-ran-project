const React = require('react')
const Default = require('../default')

function Index (places) {
  let placesFormatted = places.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2 className='text-center'>
        <a href={`/places/${place._id}`}> 
        {place.name}
        </a> 
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} className="rounded mx-auto d-block" alt={place.name} height="200" />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return (
      <Default>
          <main>
              <h1>Places People Enjoy</h1>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Default>
  )
  }
  
module.exports = Index