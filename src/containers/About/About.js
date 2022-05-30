import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
//import { Images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [About, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
      // console.log(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good development</span> <br /> Means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {About.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            whileInView={{ opacity: 1 }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imageurl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.describtion}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
