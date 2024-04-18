import React from 'react';
import "./css/timeline.css"

function timeline() {
    return (
        <div className="w-full" data-section-name={"s-four"} id={"timeline"} style={{ marginTop: '2rem' }}>
            <section className="text-gray-600 body-font h-full pt-10 w-full timeline">
                <div className="container text-4xl mx-auto w-full text-center text-white">timeline</div>
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                {/* Add another image if needed */}
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                <img className="h-24 w-auto object-center" src="timeline1.png" alt="timeline_logo" />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-full">
                            <div className="flex items-center justify-center h-full">
                                {/* Add another image if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default timeline;


