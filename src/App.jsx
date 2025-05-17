import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Bitacora from "./components/Bitacora/Bitacora";
import Games from "./components/Games/Games";
import Movies from "./components/Movies/Movies";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/api" element={<Movies />} />
            <Route path="/data" element={<Games />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
