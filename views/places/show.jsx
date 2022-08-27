const React = require("react");
const Default = require("../default");

function Show({place}) {
  return (
    <Default>
      <main>
        <h1>{place.name}</h1>
        <img src={place.pic} className="rounded mx-auto d-block" alt={place.name} height="200" />
  
        <h2 className="text-center">
          Located in {place.city}, {place.state}
        </h2>

        <p> {place.showEstablished()} </p>
      
      <h2> Rating: </h2>
      

      <a href={`/places/${place.id}/edit`} className="btn btn-warning">
        Edit
      </a>

      <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>

      </main>
    </Default>
  );
}


module.exports = Show;
