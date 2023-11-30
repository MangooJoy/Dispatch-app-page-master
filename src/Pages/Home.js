import React from "react";

const About = () => {
  const a = () => {
    return <p>이거 맞죠</p>;
  };

  const b = () => {
    return <p>이거 맞죠?</p>;
  };

  return (
    <div>
      {a()}
      {b()}
    </div>
  );
};

export default About;

