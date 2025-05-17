
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Movies from './components/Movies/Movies'

function App() {
  return (
    <Router>
      <div className='app-container'>
      <Sidebar/>
      <main>
        <Routes>
          <Route path='/api' element={<Movies />} />
        </Routes>
      </main>
      </div>
    </Router>
  )
}

export default App
