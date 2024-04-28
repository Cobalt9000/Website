import React from 'react';
import './css/Prizes.css';

function Prizes() {
    return (
        <section className="prizes w-full max-w-3xl m-auto text-gray-100" id="Prizes">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
                <h1 className="text-2xl font-semibold sm:text-4xl pb-5">Prize Money</h1>
                <div className="prize-list">
                    <div className="prize-item">
                        <h3 className="prize-title">Grand Prize:</h3>
                        <p className="prize-amount">Rs 20,000 </p>
                    </div>
                    <div className="prize-item">
                        <h3 className="prize-title">Runners up:</h3>
                        <p className="prize-amount">Rs 15,000 </p>
                    </div>
                    <div className="prize-item">
                        <h3 className="prize-title">Track prizes:</h3>
                        <p className="prize-amount">Rs 10,000 </p>
                    </div>
                </div>
                <div className="sponsor-prize">
                    <h3 className="sponsor-prize-title">Additional Prizes:</h3>
                    <p className="sponsor-prize-details"> The team with the best solution per track will receive 1-year .xyz domain names 
                    and also the participants will have a chance of getting seed funding and incubation from Derbi Foundation.</p>
                </div>
            </div>
        </section>
    );
}

export default Prizes;
