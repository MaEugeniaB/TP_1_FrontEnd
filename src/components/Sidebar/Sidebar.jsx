import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className='menu-toggle' onClick={toggleMenu}>
        <span className='hamburger'></span>
      </button>
      <div className='logo-container'>
        <img src='/logo.svg' alt='Logo del grupo' className='logo' />
      </div>
      <nav className='nav-menu'>
        <ul>
          <li>
            <Link to='/'>Presentación</Link>
          </li>
          <li>
            <Link to='/team'>Equipo</Link>
          </li>
          <li>
            <Link to='/data'>Datos JSON</Link>
          </li>
          <li>
            <Link to='/api'>API</Link>
          </li>
          <li>
            <Link to='/bitacora'>Bitácora</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
