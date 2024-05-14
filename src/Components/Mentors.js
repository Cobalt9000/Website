import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/mentor style.css";


function Mentors() {


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
              <div className="flex flex-col items-center  text-teal-600 justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">{d.name}</p>
                <p className="text-center">{d.team}</p>
                <p className="text-center">{d.description}</p>
                <p className="text-center">{d.track}</p>
                <button className="bg-teal-600 text-black text-lg px-6 py-1 rounded-xl">
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
    name: "Prakhar",
    img: "mentor1.png",
    description: "Mentor",
    track: "AI & ML",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/prakhar-tibrewal?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsBzLdH7NRYyzEfmcFPHz2Q%3D%3D",
    bg: "pb_bimg",
    portfolio: "https://kitarp29.github.io/onlineCV/beckham/"
  },
  {
    name: "Gaurav Sarkar",
    img: "mentor2.png",
    description: "Mentor",
    track: "AI & ML",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/gauravsarkar7888?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg",
    portfolio: "https://medium.com/@gosshhh9"
  },
  {
    name: "Mithun S",
    img: "mentor3.png",
    description: "Mentor",
    team: "OSCode",
    track: "Web 3.0",
    linkedin: "https://www.linkedin.com/in/i-am-mithun/",
    bg: "os_bimg"
  },
  {
    name: "Aayush Kumar",
    img: "mentor4.png",
    description: "Mentor",
    team: "PointBlank",
    track: "Web 3.0",
    linkedin: "https://www.linkedin.com/in/aayush-kumar-in?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg"
  },
  {
    name: "Anukul Anand",
    img: "mentor5.png",
    description: "Mentor",
    track: "Game & AR/VR",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/anukul-anand?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg"
  },
  {
    name: "Ankit Kumar Singh",
    img: "mentor6.png",
    description: "Mentor",
    track: "Game & AR/VR",
    team: "PointBlank",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-b23789191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg",
    portfolio: "https://ankitportfolio.social/"
  },
  {
    name: "Abhay Singh",
    img: "mentor7.png",
    description: "Mentor",
    team: "OSCode",
    track: "Cyber intelligence ",
    linkedin: "https://www.linkedin.com/in/abhay-singh-a64b89192/",
    bg: "os_bimg"
  },
  {
    name: "Sreeniketh Madgula",
    img: "mentor8.png",
    description: "Mentor",
    team: "PointBlank",
    track: "Cyber intelligence ",
    linkedin: "https://www.linkedin.com/in/sreenikethmadgula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bg: "pb_bimg",
    portfolio: "https://sreeniketh.tech/"
  },
];

export default Mentors;