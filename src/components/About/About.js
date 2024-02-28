import React, { useContext } from 'react';

import aboutimg from "../../assets/png/aboutimg.png";
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import './About.css';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body">
          <div className="about-description">
            <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
            <p style={{ color: theme.tertiary80 }}>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </p>
          </div>
          <div className="about-img rounded-circle">
            <img src={aboutimg} />
          </div>
        </div>
      </div>
    );
}

export default About
