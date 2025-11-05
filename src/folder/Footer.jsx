import { BiCopyright } from "react-icons/bi"; 
import styles from "./Footer.module.css";
export default function Footer(){
    return <>
    <div className={styles.FooterBody}>

        <div className={styles.header}>
        
                {/* <div className={styles.initials}>
                    <p>A</p>
                    <p>Adedeji</p> 
                </div> */}
        
                {/* <nav>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Process</a>
                    <a href="">Portfolio</a>
                    <a href="">Blog</a>
                    <a href="">Services</a>
                    <a href="">Contact</a> 
                </nav> */}

                <p>Copyright <BiCopyright /> 2025 Kingz1127.</p>
            </div>
        </div>
        </>
}