const React = require("react");
const Default = require("../default");

function Show(data) {
  return (
    <Default>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} className="rounded mx-auto d-block" alt={data.place.name} height="200" />
        <h2> Rating: </h2>
        <p className="text-center">
          Located in {data.place.city}, {data.place.state}
        </p>
      </main>

      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        Edit
      </a>

      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Default>
  );
}


module.exports = Show;
