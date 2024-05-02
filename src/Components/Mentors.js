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
           <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
             <div className="h-56 bg-blue-500 flex justify-center items-center rounded-t-xl">
               <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
             </div>
             <div className="flex flex-col items-center justify-center gap-4 p-4">
               <p className="text-xl font-semibold">{d.name}</p>
               <p className="text-center">{d.description}</p>
               <button className="bg-blue-500 text-white text-lg px-6 py-1 rounded-xl">
                 Read More
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
   name: `To be Announced`,
   img: `mentors.jpeg`,
   description: `To be disclosed shortly`,
 },
 {
  name: `To be Announced`,
  img: `mentors.jpeg`,
  description: `To be disclosed shortly`,
},
{
  name: `To be Announced`,
  img: `mentors.jpeg`,
  description: `To be disclosed shortly`,
},
{
  name: `To be Announced`,
  img: `mentors.jpeg`,
  description: `To be disclosed shortly`,
},
{
  name: `To be Announced`,
  img: `mentors.jpeg`,
  description: `To be disclosed shortly`,
},
{
  name: `To be Announced`,
  img: `mentors.jpeg`,
  description: `To be disclosed shortly`,
},
{
  name: `To be Announced`,
  img: `mentors.jpeg`,
  description: `To be disclosed shortly`,
},
{
  name: `To be Announced`,
  img: `mentors.jpeg`,
  description: `To be disclosed shortly`,
},
];

export default Mentors;