import React from 'react'
import AI from './brain.json'
import Cybersecurity from './OpenInnovation.json'
import TracksAnimation from './TracksAnimation'
import Web3 from './Blockchain.json'
import "./css/tracks.css";
import ARVR from './IOT.json'
import { swarmBackground } from 'threejs-toys'
function Tracks() {

React.useEffect(() => {
    const bg = swarmBackground({
      el: document.getElementById('effect'),
      eventsEl: document.getElementById('effect'),
      gpgpuSize: 128,
      color: [0x00a69e, 0x00a69e],
      geometry: 'default'
    })
    
    bg.setColors([0x00a69e, 0x00ff51])
    bg.three.camera.position.set(0, 0, 250)
    
    let ele = document.querySelectorAll('canvas')
    if (ele.length > 1) {
      
      if (ele[0] !== undefined) {
        ele[0].style.display = "none"
      }
    }
    // ele.forEach((e) => {
    //   e.style.borderRadius = "20px"
    // })
    
  }, [])

  return (
    <div className='text-white w-full h-screen' data-section-name={"s-two"} id={"Tracks"}>
      <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
      </div>
      <div className="w-full pt-16">
        <h1 className='container text-3xl py-10 mx-auto px-10 text-center pt-16'> Tracks</h1>
      </div>
      <div className=" track grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4" >
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6" >
            <TracksAnimation animationData={AI} />
            <div className="pt-6 text-center" >
              <h1 className="text-gray-100 text-xl leading-normal mt-0 mb-2">AI & ML</h1>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
          <div className="px-6" >
            <TracksAnimation animationData={Web3} />
            <div className="pt-6 text-center">
              <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Web 3.0</h1>

            </div>
          </div>
        </div>
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
          <div className="px-6" >
            <TracksAnimation animationData={ARVR} />
            <div className="pt-6 text-center">
              <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Game & AR/VR</h1>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <TracksAnimation animationData={Cybersecurity} />
            <div className="pt-6 text-center">
              <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Cyber Intelligence</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracks