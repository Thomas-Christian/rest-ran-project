const React = require("react");
const Default = require("../default");

function Edit({place}) {
  return (
    <Default>
      
      <main>

      <h2> Editing {place.name} </h2>

        <form action={`/places/${place._id}?_method=PUT`} method="POST" >

        <div className="container-fluid">

            <div className="row justify-content-around"> 

            <div className="col-md-6">
              <label htmlFor="name">Place Name</label>
              <input className="form-control" id="name" name="name" defaultValue={place.name} required />
            </div>

            <div className="col-md-4">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" id="pic" name="pic" />
            </div>

            <div className="col-md-4">
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" />
            </div>

            <div className="col-md-2">
              <label htmlFor="state">State</label>
              <input className="form-control" id="state" name="state" />
            </div>

            <div className="col-md-4">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                required
              />
            </div>

            <div className="col-md-1">
              <label htmlFor="founded">Founded Year</label>
              <input
                type="number"
                className="form-control"
                id="founded"
                name="founded"
                defaultValue={new Date().getFullYear()}
              />
            </div>

            </div>

            <br />
            
            <input type="submit" className="btn-primary" />

        </div>
        </form>
      </main>
    </Default>
  );
}

module.exports = Edit;
