import styles from "./Portfolio.module.css";
export default function Portfolio() {
  return (
    <>
      <div className={styles.portfolioBody}>
        <div>
          <h2>Porfolio</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            numquam modi odio <br />
            aiores consequatur perspiciatis. Dolor rerum incidunt debitis.
          </p>
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

          <div className={styles.kingzVid}>
            <video
              src="images/My new react and 2 more pages - Personal - Microsoft​ Edge 2025-08-28 03-48-05.mp4"
              controls
            ></video>
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
