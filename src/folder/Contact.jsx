import { BsWhatsapp } from "react-icons/bs"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import { BsInstagram } from "react-icons/bs"; 
import { CgFacebook } from "react-icons/cg"; 
import styles from "./Contact.module.css";
export default function Contact(){
    return<>

    <div className={styles.ContactBody}>

        <div>
            <h2>Let's discuss your Project</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Ipsum unde, ipsa ea possimus dignissimos</p>

             <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                <p>Address:</p>
                <p>Lagos</p>
                </div>
             </div>

             <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                <p>My Email:</p>
                <a href="mailto:osunyingboadedeji1@gmail.com">osunyingboadedeji1@gmail.com</a>
                </div>
             </div>

             <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                <p>Call Me Now:</p>
                <a href="tel:+2348131817432">+2348131817432</a>
                </div>
             </div>

             <div>
                <a href="http://"><CgFacebook /></a>
                <a href="http://"><BsInstagram /></a>
                <a href="http://"><BsWhatsapp /></a>
                <a href="http://"><FaLinkedinIn /></a>
             </div>

        </div>
        <div></div>
    </div>
    </>
}