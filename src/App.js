import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <br />
      <small>
        <a
          href="https://github.com/edenbunes/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Eden Bunes
      </small>
    </div>
  );
}

export default App;
