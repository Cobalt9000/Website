import React from 'react';
import './css/Prizes.css';

function Prizes() {
    return (
        <section className="prizes w-full max-w-3xl m-auto text-gray-100" id="Prizes">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl pb-5">Prize Money</h2>
                <div className="prize-list">
                    <div className="prize-item">
                        <h3 className="prize-title">Grand Prize:</h3>
                        <p className="prize-amount">₹25,000</p>
                    </div>
                    <div className="prize-item">
                        <h3 className="prize-title">Runners up:</h3>
                        <p className="prize-amount">₹15,000</p>
                    </div>
                    <div className="prize-item">
                        <h3 className="prize-title">Track prizes:</h3>
                        <p className="prize-amount">₹10,000 each</p>
                    </div>
                </div>
                <div className="sponsor-prize">
                    <h3 className="sponsor-prize-title">Additional Prizes:</h3>
                    <p className="sponsor-prize-details">$1500 prize pool from Polygon, Filecoin, Replit & Solana.</p>
                </div>
            </div>
        </section>
    );
}

export default Prizes;
