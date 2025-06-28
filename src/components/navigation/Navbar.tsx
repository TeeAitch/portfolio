import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import '@styles/navigation/Navbar.css'
import { FaBars, FaRegMoon, FaRegSun } from 'react-icons/fa'
import { navLinks } from '@/config';

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

  return (
    <>
      <nav className='nav'>
        <NavLink className='nav-left' to='/'><span className='highlight'>T</span>olga.</NavLink>
        <ul className="nav-ul">
          <button className='burger' onClick={() => setIsOpen(!isOpen)}><FaBars size={30} /></button>
          <li className='nav-ul-li'>
            {navLinks.map(({ to, label }) => (
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "nav-link active" : "")}
              >
                {label}
              </NavLink>
            ))}
            <a className='nav-color-mode' onClick={toggleTheme}>
              {isLight ?
                <FaRegMoon className='nav-color-mode-icon' size={24} /> :
                <FaRegSun size={27} />}
            </a>
          </li>
        </ul>
      </nav>
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