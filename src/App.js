import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-primary">Welcome to My App</h1>
        <button className="btn btn-success">Click Me</button>
      </div>
      <footer>
        This project was coded by Paige Warren and is{" "}
        <a
          href="https://github.com/Paige9-web/react-weather-app-04"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/projects/react-weather-app-pw/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
