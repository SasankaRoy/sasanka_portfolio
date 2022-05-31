import React from "react";
import "./Skill.scss";
// import ReactTooltip from "react-tooltip";
import { Images } from "../../constants";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";

const MySkill = [
  { name: "Material UI", imageurl: Images.mu5, bgcolor: "#46364a" },
  { name: "Scss", imageurl: Images.sass, bgcolor: "#46364a" },
  { name: "React.js", imageurl: Images.react, bgcolor: "#46364a" },
  { name: "Node.js", imageurl: Images.node, bgcolor: "#46364a" },
  { name: "Javascript", imageurl: Images.javascript, bgcolor: "#46364a" },
  { name: "Css", imageurl: Images.css, bgcolor: "#46364a" },
  { name: "Html", imageurl: Images.html, bgcolor: "#46364a" },
  { name: "Redux", imageurl: Images.redux, bgcolor: "#46364a" },
  { name: "Python", imageurl: Images.python, bgcolor: "#46364a" },
];
const Skill = () => {
  // const [mySkill, setmySkill] = useState([]);
  // useEffect(() => {
  //   const query = '*[_type == "skill"]';

  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       setmySkill(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
      <h2 className="head-text"> My Skills</h2>

      <div className="app__skill-container">
        <motion.div className="app__skill-list">
          {[
            MySkill.map((skils, index) => (
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
                  <img src={skils.imageurl} alt={skils.name} />
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
