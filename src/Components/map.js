import React from 'react';

const MapView = () => {

  
      
    return (
        <div className="container" id="Venue" style={{marginLeft: '10%' , marginTop: "2%"} }>
            <div className="iframe-overlay"></div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9776449181595!2d77.56436641476995!3d12.909158290896853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1659715330690!5m2!1sen!2sin"
                width="90%" height="500vh" style={{border: '0', position: 'relative', zIndex: '0', filter: 'invert(100%)' , justifyContent: 'center'}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default MapView;
