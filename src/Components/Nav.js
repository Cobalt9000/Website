import React from 'react'
import './css/navbar.css'
import NavItems from './NavItems';
function Nav() {

  const arr = ["About", "Schedule", "Tracks", "Sponsors", "FAQ"];
  return (
    <div className='navbar'>
      <div className="topnav">
        <div className="logo">
          <img src="logo.png" alt="" className='logo' />
          <div className='logotext'>Aventus</div>
        </div>
        <ul className="navitems">
          {arr.map(items => <NavItems dv={items} />)}
        </ul>
      </div>
      <div className="columnnav"></div>
    </div >
  )
}

export default Nav