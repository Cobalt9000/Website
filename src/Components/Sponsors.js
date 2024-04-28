import React from 'react';
import "./css/sponsors.css"
import { swarmBackground } from 'threejs-toys'

function Sponsors() {

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
        <div className="w-full" data-section-name={"s-four"} id={"Sponsors"} style={{ marginTop: '2rem' }}>
            <section className="text-gray-600 body-font h-full pt-10 w-full sponsors">
                <div className="container text-4xl mx-auto w-full text-center text-white">Sponsors</div>
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-auto object-center" src="DEVlight.png" alt="“DEVFOLIO LOGO”" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-auto object-center" src="DEvpolygon.png" alt="“POLYGON LOGO”" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-auto object-center" src="Ethindia.png" alt="“ETHINDIA LOGO”" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                            <img className="h-24 w-auto object-center" src="sandlogic.jpeg" alt="“SandLogic LOGO”" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-auto object-center" src="cellstrat.jpeg" alt="sponsor_logo" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                            <img className="h-24 w-auto object-center" src="xyz.webp" alt="sponsor_logo" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                            {/* Add another image if needed */}
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-auto object-center" src="Derbi.webp" alt="sponsor_logo" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                {/* Add another image if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sponsors;


