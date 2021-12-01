import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/components/Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
