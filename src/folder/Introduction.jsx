import styles from "./Introduction.module.css";
export default function Introduction() {
  return (
    <>
      <div className={styles.introBody}>
        <div>
          <h1>Hello, I'm  </h1><br />
          <h2>Adedeji Oshunyingbo</h2>
          <br />
          <br />
          <p>
            I'm a passionate full-stack developer and app creator  <br /> who loves
            building dynamic,
            user-friendly applications. <br />From crafting interactive web pages with
            React and Node.js <br /> to developing Android apps in Java, I enjoy
            turning ideas into <br /> functional digital experiences. My focus is on
            clean design, smooth <br /> functionality, and creating projects that truly
            stand out.
          </p>
          <br />
          <br />
          <div className={styles.sayHello}>
          <a href="https://wa.me/+2348131817432/?text=Hello%20there!">
            Say Hello
          </a>
          </div>

          <div className={styles.exps}>

            <div className={styles.exp}>
              <p>2 Y.</p>
              <p style={{fontSize: "1rem", color: "lightgrey"}}>Experience</p>
            </div>

            <div className={styles.exp}>
              <p>0+</p>
              <p style={{fontSize: "1rem", color: "lightgrey"}}>Project Completed</p>
            </div>

            <div className={styles.exp}>
                <p><strong>0+</strong></p>
              <p style={{fontSize: "1rem", color: "lightgrey"}}>Happy Client</p>
            </div>
          </div>

        </div>

        <div className={styles.myPics}>
          <div className={styles.myPic}>
            <img src="images/_DSC5087.jpghgyj - Copy.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
