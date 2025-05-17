import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Bitacora from "./components/Bitacora/Bitacora";
import Games from "./components/Games/Games";

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/data" element={<Games />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
