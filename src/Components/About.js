import React from 'react'
import { useState, useEffect } from 'react';
import "./css/about.css"
// import { swarmBackground } from 'threejs-toys'

export default function About() {
    const [time, setTime] = useState({})
    useEffect(() => {
        let date = new Date("May 18, 2024 09:00:00").getTime();
        setInterval(function () {
            let now = new Date().getTime();
            let dist = date - now;
            let time = {
                days: Math.floor(dist / (1000 * 60 * 60 * 24)),
                hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((dist % (1000 * 60)) / 1000)
            }
            setTime(time)

        }, 1000)

    }, [])

    // useEffect(() => {
    //     const bg = swarmBackground({
    //       el: document.getElementById('effect'),
    //       eventsEl: document.getElementById('effect'),
    //       gpgpuSize: 128,
    //       color: [0x00a69e, 0x00a69e],
    //       geometry: 'default'
    //     })
        
    //     bg.setColors([0x00a69e, 0x00ff51])
    //     bg.three.camera.position.set(0, 0, 250)
        
    //     let ele = document.querySelectorAll('canvas')
    //     if (ele.length > 1) {
          
    //       if (ele[0] !== undefined) {
    //         ele[0].style.display = "none"
    //       }
    //     }
    //     // ele.forEach((e) => {
    //     //   e.style.borderRadius = "20px"
    //     // })
        
    //   }, [])


    return (
        <div className='text-white h-screen s-two' data-section-name={"s-two"} id={"About"}>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div className="acontent">
                <div className="aleft glass">
                    <div className="clgabout">
                        <h1>About Aventus 2.0</h1>
                        <p>Welcome to Aventus 2.0, a 24-hour hackathon hosted by Department of Artificial Intelligence & Machine Learning, Dayananda Sagar College of Engineering, in collaboration with our esteemed club Code4Thought. </p>
                        <p>Set to take place on the 18th and 19th of May, this offline event aims to bring together a diverse group of college students to create groundbreaking solutions and drive progress in technology and society.</p>
                        <p>With four exciting tracks to choose from—Cyber Intelligence, AI & ML, Web 3.0, Game & AR/VR will have the opportunity to collaborate, learn, and showcase their skills in front of esteemed judges.</p>
                        <p>Join us at Aventus as we foster innovation, nurture talent, and redefine the future of technology together. Register now and be a part of this incredible journey!
                        </p>
                        <p>

                            <strong>
                                Build a better future with Aventus, Where Technology Flourishes.
                            </strong>
                        </p>
                    </div>
                </div>

                <div className="aright">
                    <img src="aventus.gif" alt="" className='' />
                </div>
            </div>
            <div className="timecount">
                <div className="t">Time left for awesomeness</div>
                <div className="days cele glass"><p className='celep'>{time.days}</p><span className='celep'>Days</span></div>
                <div className="hours cele glass"><p className='celep'>{time.hours}</p><span className='celep'>Hours</span></div>
                <div className="minutes cele glass"><p className='celep'>{time.minutes}</p><span className='celep'>Minutes</span></div>
                <div className="seconds cele glass"><p className='celep'>{time.seconds}</p><span className='celep'>Seconds</span></div>
            </div>
        </div>
    )
}
