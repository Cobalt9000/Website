import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/mentor style.css";


function Judges() {


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
              <div className="flex flex-col items-center  text-red-800 justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">{d.name}</p>
                <p className="text-center">{d.description}</p>
                <p className="text-center">{d.track}</p>
                <button className="bg-red-800 text-red-50 text-lg px-6 py-1 rounded-xl">
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
    name: "Shama Ahlawat",
    img: "Judge1.png",
    description: "Judge",
    track: "AI & ML",
    linkedin: "https://www.linkedin.com/in/shama-ahlawat-b40a72134/",
    bg: "j1_bimg",
  },
  {
    name: "Naman Sinha",
    img: "Judge2.png",
    description: "Judge",
    track: "AI & ML",
    linkedin: "https://www.linkedin.com/in/naman786sinha/",
    bg: "j2_bimg",
  },
  {
    name: "Akanksha Buchke",
    img: "Judge3.png",
    description: "Judge",
    track: "Web 3.0",
    linkedin: "https://www.linkedin.com/in/akanksha-buchke/",
    bg: "j3_bimg"
  },
  {
    name: "Ronak Saif",
    img: "Judge4.png",
    description: "Judge",
    track: "Web 3.0",
    linkedin: "https://www.linkedin.com/in/ronaksaif/",
    bg: "j4_bimg"
  },
  {
    name: "Ashutosh Pandey",
    img: "Judge5.png",
    description: "Judge",
    track: "Game & AR/VR",
    linkedin: "https://www.linkedin.com/in/ashupdsce/",
    bg: "j5_bimg",
    portfolio: "https://sapience2017.wordpress.com/"
  },
  {
    name: "Karan Ganesan",
    img: "Judge6.png",
    description: "Judge",
    track: "Game & AR/VR",
    linkedin: "https://www.linkedin.com/in/karanganesan/",
    bg: "j6_bimg",
  },
  {
    name: "Aditya Dixit",
    img: "Judge7.png",
    description: "Judge",
    track: "Cyber intelligence ",
    linkedin: "https://www.linkedin.com/in/ad17ya/",
    bg: "j7_bimg"
  },
  {
    name: "Rishabh Lakhotia",
    img: "Judge8.png",
    description: "Judge",
    track: "Cyber intelligence ",
    linkedin: "https://www.linkedin.com/in/rishabhlakhotia/",
    bg: "j8_bimg",
    portfolio: "https://www.rishabhlakhotia.com/"
  },
];

export default Judges;