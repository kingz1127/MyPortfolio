import { IoMdAnalytics } from "react-icons/io";
import { BsLaptop } from "react-icons/bs";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
import styles from "./Process.module.css";
export default function Process() {
  return (
    <>
      <div className={styles.processBody}>
        <div className={styles.work}>
          <h1>Work Process</h1>
          <p>
            My work process involves a systematic <br />
            approach to problem-solving, leveraging analytical thinking and
            collaboration to deliver <br />
            high-quality results while continuously learning and <br />
            adapting to new challenges.
          </p>
        </div>

        <div className={styles.listswork}>
          <div className={styles.listswork12}>
            <div>
              <span
                style={{
                  backgroundColor: " #131c9cff",
                  width: "0.7rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>

              <p>
                <GiArchiveResearch
                  style={{
                    color: " #07e241ff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}> 1. Research: </b>
                <span>
                  Lorem ipsum dolor sit, amet <br />
                  consectetur adipisicing elit. Ipsam cum voluptates <br />
                  unde, magnam ea aspernatur cupiditate provident
                </span>
              </p>
            </div>

            <div>
              <span
                style={{
                  backgroundColor: " #b5e31fff",
                  width: "0.7rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>
              <p>
                <SiInteractiondesignfoundation
                  style={{
                    color: "  #e31f1fff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}>2. Design: </b>
                <span>
                  Lorem ipsum dolor sit, amet <br />
                  consectetur adipisicing elit. Ipsam cum voluptates <br />
                  unde, magnam ea aspernatur cupiditate provident
                </span>
              </p>
            </div>
          </div>

          <div className={styles.listswork34}>
            <div>
              <span
                style={{
                  backgroundColor: " #e31f1fff",
                  width: "0.7rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>
              <p>
                <IoMdAnalytics
                  style={{
                    color: "  #b5e31fff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}> 3. Analyze: </b>
                <span>
                  Lorem ipsum dolor sit, amet <br />
                  consectetur adipisicing elit. Ipsam cum voluptates <br />
                  unde, magnam ea aspernatur cupiditate provident
                </span>
              </p>
            </div>

            <div>
              <span
                style={{
                  backgroundColor: " #1fe322ff",
                  width: "0.7rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>
              <p>
                <BsLaptop
                  style={{
                    color: " #131c9cff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}> 4. Launch: </b>
                <span>
                  Lorem ipsum dolor sit, amet <br />
                  consectetur adipisicing elit. Ipsam cum voluptates <br />
                  unde, magnam ea aspernatur cupiditate provident
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
