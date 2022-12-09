import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
         <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Satish Kumar</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work.
          </span>
        </div>
        <Link to="contact">
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="Github" title="Github"/>
          <img src={LinkedIn} alt="LinkedIn" title="LinkedIn" />
          <img src={Instagram} alt="Instagram" title="Instagram" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
      <motion.div 
        initial={{ top: "2%", left: "64%" }}
        whileInView={{ left: "68%" }}
        transition={transition}
        className="floating-div"
        style={{
             width: "15rem"
             }}>
        <FloatinDiv image={crown} text1="Web" text2="Developer"/>
      </motion.div>
      <motion.div 
        initial={{ left: "9rem", top: "23rem" }}
        whileInView={{ left: "0rem" }}
        transition={transition}
        className="floating-div"
        style={{
             width: "14rem",
             height:"16rem"
             }}>
        <FloatinDiv image={thumbup} text1="UI" text2="Developer"/>
        </motion.div>
        <motion.img 
        initial={{ left: "15%", top: "-3%" }}
        whileInView={{ left: "0rem" }}
        transition={transition}
        className="floating-div"
        style={{
             width: "1rem",
             transform:"scale(7.2)",
             background:"transparent"}}
        src={glassesimoji}
        alt="">
        
        </motion.img>
        <div className="blur" 
        style={{ background: "rgb(238 210 255)" }}>
        </div>
        
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
            >
              
            </div>
      </div>
    </div>
  );
};

export default Intro;
