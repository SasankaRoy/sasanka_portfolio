import React from "react";

const NavigateDotes = ({ active }) => {
  return (
    <>
      <div className="app__navigation">
        {["home", "about", "skill", "work", "contact"].map((item, index) => (
          <a
            key={index}
            href={`# ${item}`}
            style={active === item ? { backgroundColor: "#313BAC" } : { }}
            className="app__navigation-dot"
          />
        ))}
      </div>
    </>
  );
};

export default NavigateDotes;
