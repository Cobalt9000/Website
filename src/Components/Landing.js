import React from 'react'
import "./css/landing.css"
import { useEffect } from 'react'
import { swarmBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

function Landing() {



  useEffect(() => {

    const bg = swarmBackground({
      el: document.getElementById('effect'),
      eventsEl: document.getElementById('effect'),
      gpgpuSize: 256,
      color: [0x00a69e, 0x00a69e],
      geometry: 'default'
    })

    bg.setColors([0x00a69e, 0x00ff51])
    bg.three.camera.position.set(0, 0, 250)

    let ele = document.querySelectorAll('[data-engine="three.js r140"]')
    ele[0].style.display = "none"
    if (ele[1] !== undefined) {
      ele[1].style.borderRadius = "20px"
    }
  }, [])




  return (
    <div className='h-screen text-white scroll' data-section-name={"s-one"}>
      <div id='effect'>
      </div>
      <div className="lcontent">
        <div className="lleft">
          <div className="ename">Aventus</div>
          <div className="etagline">Where Tech Flourishes</div>
          <div className="date"></div>
        </div>
      </div>
    </div>
  )
}

export default Landing