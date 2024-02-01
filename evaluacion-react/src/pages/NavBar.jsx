import React from 'react'
import {Link} from 'react-router-dom';
import '../css/NavBar.css'
import ToggleButton from '../components/ToggleButton';

export default function NavBar() {
  return (
    <nav className='navbar'>
        <p><Link to="/" className='link-icon'><img src="./src/images/event.png" alt="logo"/></Link></p>
        <div className='nav'>
          <p><Link to="/" className='link'>Home</Link></p>
          <p><Link to="/createEvent" className='link'>Create event</Link></p>
          <p><Link to="/viewEvents" className='link'>View events</Link></p>
          <ToggleButton></ToggleButton>
        </div>
    </nav>
  )
}
