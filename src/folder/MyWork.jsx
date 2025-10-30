import { AiFillGithub } from "react-icons/ai"; 
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import styles from "./MyWork.module.css";
export default function MyWork() {
  return (
    <>
      <div className={styles.MyWorkbody}>
        <div>
          <div className={styles.myPic}>
            <img src="images/_DSC5087.jpghgyj.jpg" alt="" />
          </div>
          <div className={styles.mySocials}>
            <a href="https://web.facebook.com/djcom1991/" className={styles.f}>
              <CgFacebook />
            </a>
            <a href="https://www.instagram.com/kingz_1127" className={styles.i}>
              <BsInstagram />
            </a>
            <a className={styles.li} href="https://www.linkedin.com/in/adedeji-oshunyingbo-58243432b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BiFi3gFS8Qh6Ljb8gAMEqtg%3D%3D">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/+2348131817432/?text=Hello%20there!" className={styles.w}>
              <BsWhatsapp />
            </a>
          </div>
        </div>

        <div className={styles.professionalIntro}>
          <h2 className={styles.title}>
            I am a Professional FullStack <br /> Experience Developer
          </h2>
          <br />
          <p className={styles.description}>
            Am also a methodical and analytical problem-solver <br /> with a collaborative approach, always looking to learn <br /> and grow while effectively communicating technical concepts.
          </p>

          <div className={styles.buttons}>
            <a
              href="https://github.com/Kingz1127"
              target="_blank"
              rel="noopener noreferrer"
            >
             {/* <AiFillGithub />  */}
             My Projects
            </a>
            <a href="images/Oshunyingbo Adedeji CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
