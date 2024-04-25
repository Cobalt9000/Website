import React, { useEffect } from 'react';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Sponsors from './Components/Sponsors';
import Tracks from './Components/Tracks';
import About from './Components/About';
import Prizes from './Components/Prizes';
import Glimpse from "./Components/Glimpse";
import image1 from "./images/IMG_1267.jpg";
import image2 from "./images/IMG_1272.jpeg";
import image3 from "./images/IMG_1290.jpeg";
import image4 from "./images/IMG_1293.jpeg";
import image5 from "./images/IMG_1299.jpeg";
import image6 from "./images/IMG_1300.jpeg";
import image7 from "./images/IMG_1348.jpeg";
import image8 from "./images/IMG_1372.jpg";
import image9 from "./images/IMG_1375.jpg";
import image10 from "./images/IMG_1391.jpg";
import image11 from "./images/IMG_1395.jpg";
import image12 from "./images/IMG_1396.jpg";
import image13 from "./images/IMG_1407.jpg";
import image14 from "./images/IMG_1415.jpg";
import image15 from "./images/IMG_1429.jpg";
import image16 from "./images/IMG_1434.jpg";
import image17 from "./images/IMG_1530.jpg";
import image18 from "./images/IMG_1538.jpg";
import image19 from "./images/IMG_1559.jpg";
import image20 from "./images/IMG_1568.jpg";
import image21 from "./images/DSC_0499.JPG";
import image22 from "./images/DSC_0507.JPG";
import image23 from "./images/DSC_0510.JPG";
import image24 from "./images/IMG_1267.jpg";
import image25 from "./images/IMG_9875.JPG";
import image26 from "./images/IMG_9924.JPG";
import image27 from "./images/IMG_1293.jpeg";
import image28 from "./images/IMG_1299.jpeg";
import image29 from "./images/IMG_5906.JPG";
import image30 from "./images/IMG_5919.JPG";
import image31 from "./images/IMG_5932.JPG";
import image32 from "./images/IMG_5939.JPG";
import image33 from "./images/IMG_5941.JPG";
import image34 from "./images/IMG_5997.JPG";
import image35 from "./images/IMG_6012.JPG";
import image36 from "./images/IMG_9807.JPG";
import './App.css';
import Mentors from './Components/Mentors.js';
import Judges from './Components/judges.js';
import Timeline from './Components/Timeline.js';


function App() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36
    ];
    return (
        <>
            <Nav />
            <div className="conta">
                <Landing />
                <About />
                
                <Tracks />
                
                <Prizes />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <FAQ />
                    <Sponsors />
                    <Timeline />
                    <div className='timeline'>
                    
                    <h6>*Timeline is subject to change/tentative</h6>

                    </div>
                    
                    
                    
                    
                </div>

                <div className='glimpse'>
                    <h1>Glimpse of Aventus</h1>
                </div>
                
                <div style={{padding: "20px"}}>
                    <Glimpse images={images} />
                </div>

                <div  className = "judges"
                style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }} 
                >
                </div>

                <div className='judges'>
                    <h1>Judges</h1>
                </div>
                
                <div style={{padding: "20px"}}>
                    <Judges images={images} />
                </div>
                <div  className = "mentors"
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
                
                <div style={{padding: "20px"}}>
                    <Mentors images={images} />
                </div>
                

                <Footer />
            </div>
            
        </>
    );
}

export default App;
