
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Movies from './components/Movies/Movies'
import Presentation from './components/Presentation/Presentation';
import Team from './components/Team/Team';

function App() {
  return (
    <Router>
      <div className='app-container'>
      <Sidebar/>
      <main>
        <Routes>
          <Route path='/api' element={<Movies />} />
          <Route path='/' element={<Presentation />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </main>
      </div>
    </Router>
  )
}

export default App
