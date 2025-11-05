import styles from "./Portfolio.module.css";
export default function Portfolio() {
  return (
    <>
      <div className={styles.portfolioBody}>
        <div>
          <h2>Portfolio</h2>
          <br />
        </div>

        <div className={styles.allProject}>
          <div className={styles.kingzPlay}>
            <img src="images/Screenshot_20251101-084835.jpg" alt="" />
            <p>
              KingzPlay is an offline <br /> Android mobile Audio Player App{" "}
              <br /> with smooth play back, shuffle, repeat <br /> with
              bluetooth connectivity to other <br /> bluetooth devices{" "}
              <devices className={" "}></devices>
              <br />
              Technologies: Java, Android SDK etc...
            </p> 
          </div>

          <div className={styles.kingE}>
            <img src="images/Screenshot (80).png" alt=""/>
            <br />
            <p>
              Tomato is an offline <br /> E-commerce food ordering web app{" "}
              <br /> where Admin can add product, check orders <br />and users can also login, add to cart etc... <br />               <devices className={" "}></devices>
              <br />
              Technology: React.
            </p>
          </div>

          <div className={styles.kingzPlay}>
            <img src="images/Screenshot_20251101-085504.jpg" alt="" />
            <p>
              UTravel is an online <br /> Airline Reservation {" "}
               System to help<br /> customers book tickets online, <br /> 
              pick and check availability <br />
              of seats etc... <br />
              Technologies: Java, Supabase etc...
            </p>
          </div>
        </div>

        <div className={styles.more}>
          <a
            href="https://github.com/Kingz1127"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Projects
          </a>
        </div>
      </div>
    </>
  );
}
