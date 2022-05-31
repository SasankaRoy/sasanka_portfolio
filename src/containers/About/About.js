import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { Images } from "../../constants";
import { AppWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";

const Abouts = [
  {
    title: "Web development",
    describtion:
      "I am a good web developer and passionate for building responsive and productive website",
    imageurl: Images.img1,
  },
  {
    title: "MERN Stack development",
    describtion: "I a am good MERN Stack developer",
    imageurl: Images.node,
  },
  {
    title: "Backend development(Node.js)",
    describtion: "I am a good Backend developer with productive build.",
    imageurl: Images.img2,
  },
  {
    title: "Fontend development(React.js)",
    describtion:
      "I a am good Fontend and UX developer with best User Experience and Interface.",
    imageurl: Images.img3,
  },
];

const About = () => {
  // const [About, setAbouts] = useState([]);
  // useEffect(() => {
  //   const query = '*[_type == "about"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //     // console.log(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good development</span> <br /> Means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {Abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            whileInView={{ opacity: 1 }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={about.imageurl} alt={about.title} />
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
