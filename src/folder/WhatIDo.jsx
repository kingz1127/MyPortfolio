import { SiMongodb } from "react-icons/si"; 
import { BsAndroid2 } from "react-icons/bs";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import styles from "./WhatIDo.module.css";
export default function WhatIDo() {
  return (
    <>
      <div className={styles.whatIdoBody}>
        <div>
          <h2>Skills</h2>
        </div>

        <div className={styles.allSkills}>
          <div>
            <AiFillHtml5 style={{fontSize: "8rem",color: "#E44D26"}} />
            <p style={{color: "white"}}>HTML</p>
          </div>
          <div>
            <DiCss3 style={{fontSize: "8rem",color: " #1572B6 "}} />
            <p>CSS</p>
          </div>
          <div>
            <FaJsSquare style={{fontSize: "8rem",color: "#F7DF1E "}} />
            <p>JavaScript</p>
          </div>
          <div>
            <FaReact style={{fontSize: "8rem",color: " #61DAFB"}} />
            <p>React</p>
          </div>
          <div>
            <FaJava style={{fontSize: "8rem",color: " #5382A1"}} />
            <p>Java</p>
          </div>
          <div>
            <BsAndroid2 style={{fontSize: "8rem",color: " #3DDC84"}} />
            <p>Android</p>
          </div>
          <div>
            <SiSpring style={{fontSize: "8rem",color: "#6DB33F"}} />
            <p>Spring</p>
          </div>
          <div>
            <SiMongodb style={{fontSize: "8rem",color: " #47A248 "}} />
            <p>MongoDB</p>
          </div>
        </div>

      </div>
    </>
  );
}
 