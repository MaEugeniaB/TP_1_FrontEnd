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
        <img src='https://scontent.fepa9-2.fna.fbcdn.net/v/t39.30808-6/358102715_958697115394429_2463043128421865178_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEAWnQFj5tAiAfUYZwQoO58mxY6_66vpxGbFjr_rq-nEczwez-udI-p-kBTmhZwpocBYBHBQ6e_R-S8htJFI5sb&_nc_ohc=exIvmaD0h2UQ7kNvwF2SSkc&_nc_oc=Adn-wJaO_G1uKWzwB4NrcqEnkZnsVVpQ3QD1tPErB41UGLxG9VoQd59jEWRudW6iPGm0IdMFb4oolU7Pu5G9S6pz&_nc_zt=23&_nc_ht=scontent.fepa9-2.fna&_nc_gid=O9vP9_M9x2tnr3tFTKmIxA&oh=00_AfLJhoaIncWU37KH87ydZkTL8irCEKCPkqXfUrN6lSeSeA&oe=682EEF75' alt='Logo del grupo' className='logo' />
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
