import React from 'react';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Sponsors from './Components/Sponsors';
import Tracks from './Components/Tracks';
import About from './Components/About';
import Prizes from './Components/Prizes';
import './App.css';

function App() {
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
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
