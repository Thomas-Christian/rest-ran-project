const React = require("react");
const Default = require("../default");

function New(data) {
  let message = "";
  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }
  return (
    <Default>
      <main>
        <h1>Add a New Place</h1>
        {message}
        <form method="POST" action="/places">
          <div className="container-fluid">
            <div className="row justify-content-around">
              <div className="col-md-6">
                <label htmlFor="name">Place Name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
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
          </div>

          <br/>

          <input className="btn btn-primary" type="submit" value="Add Place" />

        </form>
      </main>
    </Default>
  );
}

module.exports = New;
