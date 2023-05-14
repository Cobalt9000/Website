import React from 'react'
import { useState, useEffect } from 'react';
import "./css/about.css"

export default function About() {
    const [time, setTime] = useState({})
    useEffect(() => {
        let date = new Date("June 02, 2023 09:00:00").getTime();
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
                        <h1>About Aventus</h1>
                        <p>Welcome to Aventus, a 24-hour hackathon hosted by Dayananda Sagar College of Engineering's Department of Artificial Intelligence & Machine Learning, in collaboration with our esteemed clubs, Point Blank and Code4Thought. </p>
                        <p>Set to take place on the 2nd and 3rd of June, this offline event aims to bring together a diverse group of college students to create groundbreaking solutions and drive progress in technology and society.</p>
                        <p>With four exciting tracks to choose from—AI & ML, Open Innovation, Blockchain & Web3, and Hardware & IoT—participants will have the opportunity to collaborate, learn, and showcase their skills in front of potential sponsors and employers.</p>
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
                    <img src="asecgif.gif" alt="" className='' />
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
