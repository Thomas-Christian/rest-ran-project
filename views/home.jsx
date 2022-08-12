const React = require("react");
const Default = require("./default");

function Home() {
  return (
    <Default>
      <main>
        <h1>HOME</h1>
        <div id="home">
          <img src="/images/homepage.jpg" alt="Food" height={500} />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@simplethemes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Casey Lee
            </a>{" "}
            on
            <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </div>
      </main>
    </Default>
  );
}

module.exports = Home;
