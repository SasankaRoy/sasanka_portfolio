import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { Images } from "../../constants";
import {AppWrap} from "../../wrapper";

const scaleVar = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <>
      <div  className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">hello I am</p>
                <h1 className="head-text">Sasanka </h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer.</p>
              <p className="p-text">Freelancer/FullTime</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={Images.profile} alt="profile.bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overlay_circle"
            src={Images.circle}
            alt="proflie-circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVar}
          whileInView={scaleVar.whileInView}
          className="app__header-circles"
        >
          {[Images.mu5, Images.redux, Images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap (Header,'home');
