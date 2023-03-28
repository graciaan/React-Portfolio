import React from 'react';
import myPic from './assets/IMG_1921.jpeg'
import '../styles/aboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <img className="myimg" src={myPic} alt="Photo of Andrew Gracia on a ferris wheel in Seattle, WA"></img>
      <p className="about">
        Hello! My name is Andrew Gracia and I am a full-stack web developer. 
        I have experience with HTML, CSS, JavaScript, React.js, Express.js, Node.js, and with database languages like mySQL and MongoDB.
        I am a fast learner and always working to expand my knowledge in everything I do.
      </p>      
    </div>
  )
};

export default AboutMe;

