import React from 'react';
import './css/Timeline1.css'

import { swarmBackground } from 'threejs-toys'


function Timeline() {

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
        <div className='timebody' id="Timeline">
            <div className="timeline_head">TIMELINE</div>
            <div className="maintimeline">

            <div className="maincontainer left-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-right" className="text-box lt" >
                        <h2><b>Problem Statement</b></h2>
                        <small>25th April</small>
                        <p>Problem Statement displayed on the website.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer right-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-left" className="text-box rt">
                        <h2><b>Idea Submissions</b></h2>
                        <small>26th April</small>
                        <p>idea submissions link will be open from 26th of april.</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer left-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-right" className="text-box lt">
                        <h2><b>Closing of Idea Submissions</b></h2>
                        <small>5th May</small>
                        <p>The submission link for the idea submission will be closed and the shortlisting/evaluation of the idea submissions will be begin.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>


                <div className="maincontainer right-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-left" className="text-box rt">
                        <h2><b>Announcement of Shortlisted teams</b></h2>
                        <small>13th May</small>
                        <p>Results to be announced on the website and socialmedia handles of the shortlisted teams for the aventus hackathon</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>


                <div className="maincontainer left-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-right" className="text-box lt">
                        <h2><b>Commencement of Aventus 2.0</b></h2>
                        <small>18th May</small>
                        <p>innaugration of the aventus and kickstarting of the event.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer right-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-left" className="text-box rt">
                        <h2><b>Hackthon DAY-1</b></h2>
                        <small>18th May</small>
                        <p>Day 1 - of the event </p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer left-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-right" className="text-box lt">
                        <h2><b>Hackathon Day-2</b></h2>
                        <small>19th May</small>
                        <p>Results of the hackathon and price distribution.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Timeline