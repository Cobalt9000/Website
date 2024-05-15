import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/mentor style.css";


function IndividualSponsors() {


  const settings = {
    dots: true,
    infinite: false,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Screen size less than or equal to 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screen size less than or equal to 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Screen size less than or equal to 640px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/5 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-black h-[500px] text-black rounded-xl" style={{ border: "solid 2px black" }}>
              <div className={`h-56 flex justify-center items-center rounded-t-xl bgimg ${d.bg}`}>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" style={{ border: "solid 2px white"}}/>
              </div>
              <div className="flex flex-col items-center  text-green-800 justify-center gap-6 p-4">
                <p className="text-xl font-semibold text-center">{d.name}</p>
                <p className="text-center">{d.description}</p>
                <p className="text-center">{d.price}</p>
                <button className="bg-green-800 text-black text-lg px-6 py-1 rounded-xl">
                  <a href={d.linkedin} target="_blank" rel="noopener noreferrer">linkedin profile</a>
                </button>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Vishnu Prabhu",
    img: "IS1.png",
    description: "Sponsor",
    price: "₹ 30,000",
    linkedin: "https://www.linkedin.com/in/vishnuprabhu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "aventus_bimg",
  },
  
];

export default IndividualSponsors;