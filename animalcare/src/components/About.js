import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [percentage, setPercentage] = useState(50);

  useEffect(() => {
    const target = 75;
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < target) return prev + 1;
        clearInterval(interval);
        return target;
      });
    }, 30); // speed of increment

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to our platform! We are passionate developers, designers, and creators dedicated to building solutions that make a difference.
        </p>
        <p>
          Our mission is to deliver high-quality digital products with a focus on performance, simplicity, and user experience. Whether it's web, mobile, or AI solutions, we bring ideas to life.
        </p>
        <div className="about-stats">
          <div>
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3>{percentage}%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div>
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
