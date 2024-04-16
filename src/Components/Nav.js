import React from 'react'
import './css/navbar.css'
import NavItems from './NavItems';

function Nav() {

    const arr = ["About", "Tracks", "Prizes", "Sponsors", "FAQ", "Glimpse","Timeline"];
    return (
        <div className='navbar'>
            <div className="topnav">
                <div className="logo">
                    <a href="/">
                        <img src="logo.png" alt="" className='' />
                        {/* <div className='logotext'>Aventus</div> */}
                    </a>
                </div>
                <ul className="navitems">
                    {arr.map((items, key) => <NavItems dv={items} key={key} />)}
                </ul>
            </div>
            <div className="columnnav"></div>
        </div>
    )
}

export default Nav
