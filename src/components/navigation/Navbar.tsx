import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import '@styles/navigation/Navbar.css'
import {FaBars} from 'react-icons/fa'
import { navLinks } from '@/config';

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return (
    <>
      <nav className='nav'>
        <NavLink className='nav-left' to='/'>Tolga Han</NavLink>
          <ul className="nav-ul">
            <button className='burger' onClick={()=> setIsOpen(!isOpen)}><FaBars size={30}/></button>
            <li className='nav-ul-li'>
              {navLinks.map(({to, label})=>(
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-link active" : "")}
                  >
                    {label}
                  </NavLink>
              ))}
            </li>
          </ul>
      </nav>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map(({to, label})=>(
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