import React from 'react'
import './css/navbar.css'
function Nav() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const onmouse = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }


  return (
    <div className='navbar'>
      <div className="topnav">
        <div className="logo">
          <img src="logo.png" alt="" className='logo' />
          <div className='logotext'>Aventus</div>
        </div>
        <ul className="navitems">
          <li className="navele" data-value={"About"} onMouseEnter={onmouse}>About</li>
          <li className="navele" data-value={"Schedule"} onMouseEnter={onmouse}>Schedule</li>
          <li className="navele" data-value={"Tracks"} onMouseEnter={onmouse}>Tracks</li>
          <li className="navele" data-value={"Sponsors"} onMouseEnter={onmouse}>Sponsors</li>
          <li className="navele" data-value={"FAQ"} onMouseEnter={onmouse}>FAQ</li>
        </ul>
      </div>
      <div className="columnnav"></div>
    </div >
  )
}

export default Nav