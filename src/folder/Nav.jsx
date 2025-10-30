import { BsFillSunFill } from "react-icons/bs"; 
import { MdDarkMode } from "react-icons/md"; 
import { BsFillPersonFill } from "react-icons/bs";
import { FcContacts, FcServices, FcProcess, FcAbout } from "react-icons/fc";
import { RiNewspaperLine } from "react-icons/ri";
import { GiSchoolBag } from "react-icons/gi";
import { BiHomeAlt2 } from "react-icons/bi";
import styles from "./Nav.module.css";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.headerContainer} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.header}>
        <div className={styles.initials}>
          <p className={styles.a}>A</p>
          <p>
            <BsFillPersonFill /> Adedeji
          </p>
        </div>

        <nav>
          <a href="#home"><BiHomeAlt2 /> Home</a>
          <a href="#about"><FcAbout /> About</a>
          <a href="#process"><FcProcess /> Process</a>
          <a href="#portfolio"><GiSchoolBag /> Portfolio</a>
          <a href="#blog"><RiNewspaperLine /> Blog</a>
          <a href="#services"><FcServices /> Services</a>
          <a href="#contact"><FcContacts /> Contact</a>
        </nav>

        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? <MdDarkMode  /> : <BsFillSunFill style={{color: "yellow"}} />}
        </button>
      </div>
      <hr />
    </div>
  );
}
