const React = require("react");
const Default = require("../default");

function Show({place}) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (place.comments.length) {
    comments = place.comments.map(c => {
      return (
        <div className="card col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
        )
      })
    }

  return (
    <Default>
      <main>
        <h1>{place.name}</h1>
        <img src={place.pic} className="rounded mx-auto d-block" alt={place.name} height="200" />
  
        <h2 className="text-center">
          Located in {place.city}, {place.state}
        </h2>

        <p> {place.showEstablished()} </p>

       <div> 

      <a href={`/places/${place.id}/edit`} className="btn btn-warning" type="submit"> Edit </a>

      <form method="POST" action={`/places/${place.id}?_method=DELETE`} className="col-sm">
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>

      </div>


      <h2> Comments </h2>
      <div className="row justify-content-center"> 
      {comments}
      </div>

      <br />

      <h3> Add your own!</h3>
      <br/>

      <form method="POST" action={`/places/${place.id}/comment`}>
        <div className="container align-content-center"> 
        
        <div className="row justify-content-center">
              <div className="col-md-3">
                <label htmlFor="author">Your Name</label>
                <input className="form-control" id="author" name="author" />
              </div>

              <div className="col-md-2">
                <label htmlFor="rant">Rant?</label>
                <br/>
                <input className="form-check-input" type="checkbox" id="rant" name="rant"></input>
              </div>
              
        </div>

        <div className="col-md">
              <label htmlFor="content" className="form-label">Your Comments:</label>
              <textarea className="form-control" id="content" name="content" rows="3"></textarea>
        </div>

              <div className="form-group col-sm">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-range" />
                </div>

      <button type="submit" className="btn btn-primary">Add Comment</button>
        </div>


      </form>



      </main>
    </Default>
  );
}


module.exports = Show;
