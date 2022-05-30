import React, { useState } from "react";
import "./Footer.scss";

import { Images } from "../../constants";
// import { motion } from "framer-motion";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import { AppWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  // const [Name, setName] = useState();
  // const [Email, setEmail] = useState();
  // const [Message, setMessage] = useState();
  const [fromData, setformData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formSubmited, setformSubmited] = useState(false);
  const { Name, Email, Message } = fromData;

  const handlerInputs = (e) => {
    const { name, value } = e.target;
    setformData({ ...fromData, [name]: value });
  };
  console.log(Message);

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: Name,
      email: Email,
      message: Message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setformSubmited(true);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  return (
    <>
      <h2 className="head-text">take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="Email" />
          <a href="mailto:sasankaroy033@gmail.com" className="p-text">
            sasankaroy033@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={Images.mobile} alt="mobile" />
          <a href="tel: +91 (8617452148)" className="p-text">
            +918617452148
          </a>
        </div>
      </div>

      {!formSubmited ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="Name"
              value={Name}
              onChange={handlerInputs}
            />
          </div>

          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="Email"
              value={Email}
              onChange={handlerInputs}
            />
          </div>

          <div className="app__flex">
            <textarea
              className="p-text"
              name="Message"
              placeholder="Your Message"
              value={Message}
              onChange={handlerInputs}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks For getting Touch</h3>!
        </div>
      )}
    </>
  );
};

export default Footer;
