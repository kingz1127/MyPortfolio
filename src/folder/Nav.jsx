import { BsFillSunFill } from "react-icons/bs";  
import { MdDarkMode } from "react-icons/md"; 
import { BsFillPersonFill } from "react-icons/bs";
import { FcContacts, FcServices, FcProcess, FcAbout } from "react-icons/fc";
import { RiNewspaperLine } from "react-icons/ri";
import { GiSchoolBag } from "react-icons/gi";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa"; 
import styles from "./Nav.module.css";
import { useEffect, useState } from "react";

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

        {/* Hamburger Button (mobile) */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
          <a href="#home" onClick={toggleMenu}><BiHomeAlt2 /> Home</a>
          <a href="#about" onClick={toggleMenu}><FcAbout /> About</a>
          <a href="#process" onClick={toggleMenu}><FcProcess /> Process</a>
          <a href="#portfolio" onClick={toggleMenu}><GiSchoolBag /> Portfolio</a>
          <a href="#blog" onClick={toggleMenu}><RiNewspaperLine /> Blog</a>
          <a href="#services" onClick={toggleMenu}><FcServices /> Services</a>
          <a href="#contact" onClick={toggleMenu}><FcContacts /> Contact</a>
        </nav>

        {/* Theme Toggle (always visible) */}
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? (
            <MdDarkMode style={{color: "black"}} />
          ) : (
            <BsFillSunFill style={{ color: "yellow" }} />
          )}
        </button>
      </div>
      <hr />
    </div>
  );
}
