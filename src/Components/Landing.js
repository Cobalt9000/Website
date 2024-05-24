import React, { useState } from 'react'
import "./css/landing.css"
import { useEffect } from 'react'
// import { swarmBackground } from 'threejs-toys'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Landing() {
  const [height, setHeight] = useState('100%');
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
    



  return (
    <div id='landing-main' data-section-name={"s-one"}>
      <div id='effect' >
      </div>
      <div className="lcontent">
        <div className="lleft">
          <div className="ename"><div>AVENTUS</div><div className='name_two'>2.0</div></div>
          <div className="etagline">where technology flourishes</div>
          <div className="etagline">#wtf</div>
          <div className="edate">18th - 19th May 2024</div>
          <div className="eline">{"24 Hour Hackathon"}</div>
          <div className="devbtn">
            <div class="apply-button"
              data-hackathon-slug="aventus-2-0"
              data-button-theme="dark"
              style={{ display: "flex", flexDirection: "column", zIndex: 100 }}
            >
            </div>
            <a href='https://axllowusnmeq.objectstorage.ap-hyderabad-1.oci.customer-oci.com/p/b9Ia3VANc7rpLAdnSfWO4y4me36WrRM8GvvUs8yioucjpuFkalf6M_Mx6inZ4R6w/n/axllowusnmeq/b/Aventus/o/Shortlisted%20Teams-%20Aventus%202.0.pdf'>
              <button className="dbtn">
              <p>Final Selected Teams <br></br>- Aventus 2.0</p>
              {/* <svg className="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 115.46 123.46" style={{ "height": "24px", "width": "24px", "marginRight": "8px" }}>
                <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
                <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
              </svg> */}
            </button>
                 
            </a>
            
            <a href='https://axllowusnmeq.objectstorage.ap-hyderabad-1.oci.customer-oci.com/p/nu0piCZC4dfATp3DBqPbdKSX2cR456gYOoPK1ZjXNtRfoq7hDX0l5-PbB9V5dThd/n/axllowusnmeq/b/Aventus/o/Aventus%20Brochure.pdf'>
              <button className="timeline">
              <p>Download Updated Brochure</p>
            </button>
            </a>
            
          </div>
        </div>
        <div className="lright">
          <div className="llogo"><img src="logo.png" alt="" /></div>
          <div className="msg">Connect with us on our socials</div>
          <div className="socialmediabtn">
            <a href="https://www.instagram.com/hackaventus/" target="_blank" rel="noopener noreferrer">
              <button className="sbtn"><FontAwesomeIcon icon={brands('instagram')} className={"fa-4x"} /></button>
            </a>

            <a href="https://www.linkedin.com/showcase/aventus-dsce/" target="_blank" rel="noopener noreferrer">
              <button className="sbtn"><FontAwesomeIcon icon={brands('linkedin')} className={"fa-4x"} /></button>
            </a>

            <a href="https://discord.com/invite/Mbb9bkdsCj" target="_blank" rel="noopener noreferrer">
              <button className="sbtn"><FontAwesomeIcon icon={brands('discord')} className={"fa-4x"} /></button>
            </a>

            <a href="https://t.me/+SebssWzmQMVmZGI1" target="_blank" rel="noopener noreferrer">
              <button className="sbtn"><FontAwesomeIcon icon={brands('telegram')} className={"fa-4x"} /></button>
            </a>
          </div>
        </div>
      </div>
      <div className="presented">
        <div className="ptext">brought to you by</div>
        <div className="pclg">Dayananda Sagar College of Engineering</div>
        <div className="pname">Department of Artificial Intelligence & Machine Learning </div>
      </div>
    </div>
  )
}

export default Landing
