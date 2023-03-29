import React from 'react'
import { useState, useEffect } from 'react';
import "./css/about.css"

export default function About() {
    const [time, setTime] = useState({})
    useEffect(() => {
        let date = new Date("May 08, 2023 00:00:00").getTime();
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
        <div className='text-white h-screen scroll s-two' data-section-name={"s-two"} id={"About"}>
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
                        <p>We are a group of students at Dayananda Sagar College of Engineering, passionate about technology and innovation. Our goal is to bring together the brightest minds from our campus and beyond to collaborate and build solutions to real-world problems.</p>
                        <p>Aventus hackathon is a 24-hour in-person event where participants form teams, develop new ideas and create functional prototypes. The event attracts top students from different backgrounds and disciplines, providing an inclusive environment for cross-disciplinary collaboration and learning.</p>
                        <p>With the support of industry partners and sponsors, we aim to provide participants with the resources they need to bring their ideas to life. We also offer talks, and mentorship opportunities to help participants grow their technical and creative skills.</p>
                        <p>Join us for a weekend of coding, creating, and learning with like-minded individuals.
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
