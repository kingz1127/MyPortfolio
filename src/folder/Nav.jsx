import { BsFillPersonFill } from "react-icons/bs"; 

import { FcContacts } from "react-icons/fc"; 
import { FcServices } from "react-icons/fc"; 
import { RiNewspaperLine } from "react-icons/ri"; 
import { GiSchoolBag } from "react-icons/gi"; 
import { FcProcess } from "react-icons/fc"; 
import { FcAbout } from "react-icons/fc"; 
import { BiHomeAlt2 } from "react-icons/bi"; 
import styles from "./Nav.module.css"
export default function Nav(){
    return<>
    <div className={styles.headerContainer}>
    <div className={styles.header}>

        <div className={styles.initials}>
            <p className={styles.a}>A</p>
            <p><BsFillPersonFill /> Adedeji</p>
        </div>

        <nav>
            <a href=""><BiHomeAlt2 /> Home</a>
            <a href=""><FcAbout /> About</a>
            <a href=""><FcProcess /> Process</a>
            <a href=""><GiSchoolBag /> Portfolio</a>
            <a href=""><RiNewspaperLine /> Blog</a>
            <a href=""><FcServices /> Services</a>
            <a href=""><FcContacts /> Contact</a>
        </nav>
    </div> 
    <hr />
    </div>
    </>
}