import React, { useState, useEffect } from "react";
import "./Skill.scss";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
const Skill = () => {
  const [mySkill, setmySkill] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skill"]';

    client
      .fetch(query)
      .then((data) => {
        setmySkill(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2 className="head-text"> My Skills</h2>

      <div className="app__skill-container">
        <motion.div className="app__skill-list">
          {[
            mySkill.map((skils, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skill-item app__flex"
                key={index}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skils.bgcolor }}
                >
                  <img src={urlFor(skils.imageurl)} alt={skils.name} />
                </div>
                <p className="p-text">{skils.name}</p>
              </motion.div>
            )),
          ]}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(Skill, "skill");
