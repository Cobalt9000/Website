import React from 'react';
import "./css/sponsors.css"

function Sponsors() {


    return (
        <div className="w-full" data-section-name={"s-four"} id={"Sponsors"} style={{ marginTop: '2rem' }}>
            <section className="text-gray-600 body-font h-full pt-10 w-full sponsors">
                <div className="container text-4xl mx-auto w-full text-center text-white">Community Collaborators</div>
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap mark">
                        <div className="p-4 md:w-1/2 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="OSCODE.png" alt="“OS code”" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                            <img className="h-24 w-24 object-center rounded object-cover" src="PointBlank.png" alt="“PointBlank”" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sponsors;


