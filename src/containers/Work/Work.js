import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
// import { Images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [Work, setWork] = useState([]);
  const [FilterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experience"]';
    client
      .fetch(query)
      .then((data) => {
        setFilterWork(data);
        setWork(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlerFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item == "All") {
        setFilterWork(Work);
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio </span>
      </h2>

      <div className="app__work-filter">
        {["Fontend", "Backend", "React.js", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handlerFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {FilterWork.map((work, item) => (
          <div className="app__work-item app__flex" key={item}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imageurl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  delayChildren: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href={work.projectlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.5,
                      delayChildren: 0.5,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className=" app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.describtion}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
