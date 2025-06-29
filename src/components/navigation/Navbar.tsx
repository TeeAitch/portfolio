import '@styles/navigation/Navbar.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi';
import { navLinks } from '@/config';
import { IsMobile } from '@util/Helper';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
    setIsLight(document.body.classList.contains('light-theme'));
  };
  useEffect(() => {
    setIsLight(document.body.classList.contains('light-theme'));
  }, []);

  const renderIcon = (classname: string) => {
    return (
      <a className={classname} onClick={toggleTheme}>
        {isLight ?
          <FiMoon className='nav-color-mode-icon' size={24} /> :
          <FiSun size={24} />}
      </a>)
  }

  const renderNavigation = () => {
    return (
      <li className='nav-ul-li'>
        {navLinks.map(({ to, label }) => (
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "nav-link active" : "")}
          >
            {label}
          </NavLink>
        ))}
        {renderIcon('nav-color-mode')}
      </li>
    );
  }

  return (
    <>
      <nav className='nav'>
        <NavLink className='nav-left' to='/'><span className='highlight'>T</span>olga.</NavLink>
        <ul>
          <li className='special'>
            {renderIcon('sidebar-icon')}
            <button className='burger' onClick={() => setIsOpen(!isOpen)}><FaBars size={30} /></button>
          </li>
          {IsMobile() ? null : renderNavigation()}
        </ul>
      </nav>


      <div
        className={`sidebar-overlay ${!isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "nav-link active" : "")}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>

  )
}
export default Navbar;