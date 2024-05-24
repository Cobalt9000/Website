import React, { useEffect, useState } from 'react';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Sponsors from './Components/Sponsors';
import Tracks from './Components/Tracks';
import About from './Components/About';
import Prizes from './Components/Prizes';
import Glimpse from "./Components/Glimpse";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import './App.css';
import Mentors from './Components/Mentors.js';
import Judges from './Components/judges.js';
import Timeline from './Components/Timeline.js';
import ProblemStatement from './Components/Problemstate.js';
import Map from './Components/map.js';
import { swarmBackground } from 'threejs-toys'
import Alert from './Components/Alert.js';
import CommunityColab from './Components/CommunityColab.js';
import IndividualSponsor from './Components/Individualsponsors.js';
import GrandJury from './Components/GrandJury.js';



function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
    }
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    


    React.useEffect(() => {
        const container = document.getElementById('effect');
        container.style.width = '100vw'; // Set the width to 100% of the viewport width
        container.style.height = '100vh'; // Set the height to 100% of the viewport height

        const bg = swarmBackground({
            el: container,
            eventsEl: container,
            gpgpuSize: 100,
            color: [0x00a69e, 0x00a69e],
            geometry: 'default',
        });

        bg.setColors([0x00a69e, 0x00ff51]);
        bg.three.camera.position.set(0, 0, 250);
      
        let ele = document.querySelectorAll('canvas');
        if (ele.length > 1) {
            if (ele[0] !== undefined) {
                ele[0].style.display = "none";
            }
        }
        ele.forEach((e) => {
            e.style.borderRadius = "20px"
        })
    }, []);

    return (
        <>
            <Nav />
            <Alert message="Thank you to all participants for making AVENTUS 2.0 an incredible success!" type="warning" />
            <div className="conta">
                <div>
                    <Landing />
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Tracks />
                </div>
                <div>
                    <Prizes />
                </div>
                
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                <div>
                    <Sponsors />
                </div>
                <div>
                    <CommunityColab />
                </div>
                
                <div>
                    <Timeline />
                </div>    
                <div className='timeline'>

                <h6>*Timeline is subject to change/tentative</h6>
                </div>
    
                </div>
                <div className='ps'>
                    <ProblemStatement />
                </div>
                <div className="glimpse"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>

                <div className='glimpse'>
                    <h1>Winners of Aventus 2.0</h1>
                </div>
                
                <div style={{ padding: "20px" }}>
                    <Glimpse images={images} />
                </div>

                <div className="individual"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>

                <div className="individual">
                    <h1>Individual Sponsors</h1>
                </div>
                
                <div style={{ padding: "20px" }}>
                    <IndividualSponsor images={images} />
                </div>

                <div className="GrandJury"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>

                <div className='GrandJury'>
                    <h1>Grand Jury</h1>
                </div>
                
                <div style={{ padding: "20px" }}>
                    <GrandJury images={images} />
                </div>

                <div className="GrandJury"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>

                <div className="judges">
                    <h1>Judges</h1>
                </div>
                
                <div style={{ padding: "20px" }}>
                    <Judges images={images} />
                </div>
                <div className="mentors"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </div>

                <div className='mentors'>
                    <h1>Mentors</h1>
                </div>
                
                <div style={{ padding: "20px" }}>
                    <Mentors images={images} />
                </div>
                <div className='map'>
                    <Map />
                </div>
                <div>
                    <FAQ />
                </div>
                <div>
                    <Footer />
                </div>
            </div>  
        </>
    );
}

export default App;
