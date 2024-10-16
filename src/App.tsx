import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CS5610: Web Development</h1>
        <h2>Northeastern University</h2>
        <h2>Fall 2024</h2>
        <div className="spacer" />
        <h2>Name: Somesh M Bachani</h2>
        <h2>Section: 1</h2>
        <div className="spacer" />
        <p>
          Relevant links:
          <a
            className="App-link"
            href="https://a3--cs5610kanbas.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.instructure.com/sites/default/files/image/2021-12/Canvas_logo_single_mark.png"
              alt="Canvas Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          {" || "}
          <a
            className="App-link"
            href="https://github.com/BachaniS/kanbas-react-web-app/tree/a2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          {" || "}
          <a
            className="App-link"
            href="https://a3--cs5610kanbas.netlify.app/#/Labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/53/72/labs-logo-inspiration-vector-23065372.jpg"
              alt="Labs"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
