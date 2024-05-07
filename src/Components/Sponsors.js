import React from 'react';
import "./css/sponsors.css"

function Sponsors() {


    return (
        <div className="w-full" data-section-name={"s-four"} id={"Sponsors"} style={{ marginTop: '2rem' }}>
            <section className="text-gray-600 body-font h-full pt-10 w-full sponsors">
                <div className="container text-4xl mx-auto w-full text-center text-white">Sponsors</div>
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap mark">
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded-2xl object-cover" src="DEVlight.png" alt="“DEVFOLIO LOGO”" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="DEvpolygon.png" alt="“POLYGON LOGO”" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="Ethindia.png" alt="“ETHINDIA LOGO”" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mark">
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="Sandlogic.png" alt="“SandLogic LOGO”" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded-2xl object-contain" src="cellstrat.png" alt="sponsor_logo" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="xyz.webp" alt="sponsor_logo" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mark">
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="Canam.png" alt="sponsor_logo" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="Derbi.webp" alt="sponsor_logo" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-24 object-center rounded object-cover" src="Nueverafull.png" alt="sponsor_logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sponsors;


