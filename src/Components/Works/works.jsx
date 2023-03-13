import React, { useContext } from "react";
import "./works.css";
import Netflix from "../../img/Netflix.png";
import csod from "../../img/csod.png";
import su from "../../img/searchunify.png";
import  hd from "../../img/HD.png";
import bluebeam from "../../img/bluebeam.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            My responsibilities in grazitti involves analyzing and modifying existing client projects, 
            <br />
            designing, constructing, and testing end-user applications that meet user needs.
            <br />
            Also work on proof of concept implementations for various clients, including Netflix.
            <br />
             and also handled client calls and work with leads to resolve their issues.
            <br />
            Some of the logos are mentioned 👉
            <br />
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle w-secCircle1">
            <img src={Netflix} alt="" />
          </div>
          <div className="w-secCircle w-secCircle2">
            <img src={csod} alt="" />
          </div>
          <div className="w-secCircle  w-secCircle3">
            <img src={su} alt="" />
          </div>{" "}
          <div className="w-secCircle w-secCircle4">
            <img src={hd} alt="" />
          </div>
          <div className="w-secCircle w-secCircle5">
            <img src={bluebeam} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
