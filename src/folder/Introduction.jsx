import styles from "./Introduction.module.css"
export default function Introduction(){
    return <>
    <div className={styles.introBody}>
        <div>
            <h1>Hello, I'm <br /> Adedeji Oshunyingbo</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                 Ex nemo nostrum quisquam magni ea pariatur atque? <br />
                 Laudantium earum eveniet temporibus aspernatur <br /> dicta, 
                 fuga dolores veniam quidem totam ipsam, ea similique.</p>
                 <a href="http://">Say Hello</a>

                 <div>
                    <div><p>15</p></div>
                    <div><p>250</p></div>
                    <div><p>client</p></div>
                 </div> 
        </div>
        
        <div className={styles.myPics}>

        <div className={styles.myPic}>
            <img src="images/_DSC5087.jpghgyj - Copy.png" alt="" />
        </div>
        
        </div>

    </div>
    </>
}