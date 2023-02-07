import React from 'react'
import AI from './brain.json'
import Blockchain from './Blockchain.json'
import TracksAnimation from './TracksAnimation'
import OpenInnovation from './OpenInnovation.json'
import IOT from './IOT.json'
function Tracks() {
  return (
    <div className='text-white w-full h-screen scroll' data-section-name={"s-two"}>
      <div className="w-full">
        <h1 className='text-3xl py-10 mx-auto px-10'> Tracks</h1>
      </div>
        <div className="w-full mx-auto px-4 py-10 flex justify-evenly" >
            <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6" >
                  <TracksAnimation animationData={AI} />
                <div className="pt-6 text-center" >
                  <h1 className="text-gray-100 text-xl leading-normal mt-0 mb-2">AIML</h1>   
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
              <div className="px-6" >
                <TracksAnimation animationData={Blockchain} />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Blockchain</h1>
                  
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
              <div className="px-6" >
                <TracksAnimation animationData={IOT} />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">IOT</h1>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <TracksAnimation animationData={OpenInnovation} />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">Open Innovation</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Tracks