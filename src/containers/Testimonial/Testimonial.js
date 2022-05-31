import React, { useState, useEffect } from "react";
import "./Testimonial.scss";
import { Images } from "../../constants";
// import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";

const testimonial = [
  {
    name: "Sasanka",
    feedback: "Great job, would recommend!",
    company: "own",
    imageurl: Images.javascript,
  },
  {
    name: "Aaliya",
    feedback:
      "A good developer with best skill sets, Thankyou for building a awesome website using react.js",
    company: "Freelancer",
    imageurl: Images.node,
  },
  {
    name: "Ankit",
    feedback: "Great working Experience with you!",
    company: "Criptech",
    imageurl: Images.html,
  },
];

const Testimonial = () => {
  // const [brand, setBrand] = useState([]);
  // const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';

  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       setTestimonial(data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const Test = testimonial[currentIndex];
  const clickHandler = (index) => {
    setcurrentIndex(index);
  };

  return (
    <>
      {testimonial.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={Test.imageurl} alt="image" />
            <div className="app__testimonial-content">
              <p className="p-text">{Test.feedback}</p>
              <div>
                <h4 className="bold-text">{Test.name}</h4>
                <h5 className="p-text">{Test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                clickHandler(
                  currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                clickHandler(
                  currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(Testimonial, "testimonial");
