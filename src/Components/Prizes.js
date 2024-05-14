import React from 'react';
import './css/Prizes.css';

function Prizes() {
    return (
        <section className="prizes w-full max-w-3xl m-auto text-gray-100" id="Prizes">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h1 className="text-2xl font-semibold sm:text-4xl pb-5">Prize Money</h1>
                <div className="prize-list">
                    <div className="prize-item">
                        <h3 className="prize-title">Grand Prize:</h3>
                        <p className="prize-amount">₹ 30,000 worth prizes</p>
                    </div>
                    <div className="prize-item">
                        <h3 className="prize-title">Runners up:</h3>
                        <p className="prize-amount">₹ 20,000 worth prizes</p>
                    </div>
                    <div className="prize-item">
                        <h3 className="prize-title">Track prizes:</h3>
                        <p className="prize-amount">₹ 10,000 for each track</p>
                    </div>
                </div>
                <br></br>
                <div className="sponsor-prize">
                    <h3 className="sponsor-prize-title">Additional Prizes:</h3>
                    <br></br>
                    <p className="sponsor-prize-details"> The team with the best solution per track will receive 1-year .xyz domain names 
                    and also the participants will have a chance of getting seed funding and incubation from Derbi Foundation and get a internship opportunity
                    at Nuevera InfoTech Pvt Ltd and SandLogic. </p>
                    <br></br>
                    <h3 className="sponsor-prize-title">Note:</h3>
                    <p className="sponsor-prize-details"> Grand prize: ₹ 25k Cash prize and ₹ 5k worth additional prizes</p>
                    <p className="sponsor-prize-details"> Runners up prize: ₹ 15k Cash prize and ₹ 5k worth additional prizes</p>
                </div>
            </div>
        </section>
    );
}

export default Prizes;
