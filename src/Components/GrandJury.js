import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/mentor style.css";


function GrandJury() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Screen size less than or equal to 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screen size less than or equal to 768px
        settings: {
          slidesToShow: 2,
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
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-black h-[500px] text-black rounded-xl" style={{ border: "solid 2px black" }}>
              <div className={`h-56 flex justify-center items-center rounded-t-xl bgimg ${d.bg}`}>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" style={{ border: "solid 2px white"}}/>
              </div>
              <div className="flex flex-col items-center  text-yellow-500 justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">{d.name}</p>
                <p className="text-center">{d.description}</p>
                <p className="text-center">{d.Company}</p>
                <button className="bg-yellow-500 text-black text-lg px-6 py-1 rounded-xl">
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
    name: "Vivek Singhal",
    img: "GJ1.png",
    description: "Grand Jury",
    Company: "Co-Founder of Cellstrat",
    linkedin: "https://www.linkedin.com/in/viveksinghal1/",
    bg: "",
  },
  {
    name: "Nandi Dharma Kishore",
    img: "GJ2.png",
    Company: "CEO at Ashtaksha Labs",
    description: "Grand Jury",
    linkedin: "https://www.linkedin.com/in/nandi-dharma-kishore-hn-3a56b758/",
    bg: "",
  },
  {
    name: "Sai Sundarakrishna",
    img: "GJ3.png",
    description: "Grand Jury",
    Company: "CEO at DeepmAGIc",
    linkedin: "https://www.linkedin.com/in/sai-sundarakrishna-7b87625/",
    bg: ""
  },
  {
    name: "Satya Narayana B V",
    img: "GJ4.png",
    description: "Grand Jury",
    Company: "CEO at Derbi Foundation",
    linkedin: "https://www.linkedin.com/in/sathyanarayanabv/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=in",
    bg: ""
  },
  {
    name: "Hemanth Niranjan",
    img: "GJ5.png",
    description: "Grand Jury",
    Company: "CEO at Neuvera Infotech Pvt Ltd",
    linkedin: "https://www.linkedin.com/in/sai-sundarakrishna-7b87625/",
    bg: ""
  },
];

export default GrandJury;