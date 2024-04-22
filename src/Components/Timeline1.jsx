import React from 'react';
import './Timeline.css'
import bimg from '../../Assets/bottom.png'


function Timeline() {


    return (
        <div className='timebody'>
            <div className="timeline_head">TIMELINE</div>
            <div className="maintimeline">

                <div className="maincontainer left-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-right" className="text-box lt" >
                        <h2><b>Problem Statement</b></h2>
                        <small>22nd April</small>
                        <p>Problem Statement displayed on the website.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer right-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-left" className="text-box rt">
                        <h2><b>Idea Submissions</b></h2>
                        <small>24th April</small>
                        <p>idea submissions will be open from 24th of april.</p>
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
                        <h2><b>Code-Relay</b></h2>
                        <small>8th May</small>
                        <p>Race to the code at CodeRelay! Join the fast-paced event and conquer programming challenges together!</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>


                <div className="maincontainer left-container">
                    <div data-aos="zoom-in" className='timelineimgdiv'>
                    </div>
                    <div data-aos="fade-right" className="text-box lt">
                        <h2><b>Hack-MY-PC</b></h2>
                        <small>18th May</small>
                        <p>Unlock innovation at Hack My PC! Join the immersive event and delve into the world of hacking.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>


            </div>
            <div className="timeline_img">
                <img src={bimg} alt="" />
            </div>

        </div>
    )
}

export default Timeline