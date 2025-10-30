import { IoMdAnalytics } from "react-icons/io";
import { BsLaptop } from "react-icons/bs";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
import styles from "./Process.module.css";
export default function Process() {
  return (
    <>
      <div className={styles.processBody}>
        <div>
          <div>
            <h2>Work Process</h2>
            <p>
              Work process involves a systematic <br />
              approach to problem-solving, leveraging <br />
              analytical thinking and collaboration to deliver <br />
              high-quality results while continuously learning and <br />
              adapting to new challenges.
            </p>
          </div>

          <div>
            <div>
              <div>
                <GiArchiveResearch />
                <p>
                  <b>1.Research</b>
                  <span>
                    Lorem ipsum dolor sit, amet <br />
                    consectetur adipisicing elit. Ipsam cum voluptates <br />
                    unde, magnam ea aspernatur cupiditate provident
                  </span>
                </p>
              </div>

              <div>
                <SiInteractiondesignfoundation />
                <p>
                  <b>2.Design</b>
                  <span>
                    Lorem ipsum dolor sit, amet <br />
                    consectetur adipisicing elit. Ipsam cum voluptates <br />
                    unde, magnam ea aspernatur cupiditate provident
                  </span>
                </p>
              </div>
            </div>

            <div>
              <div>
                <IoMdAnalytics />
                <p>
                  <b>3.Analyze</b>
                  <span>
                    Lorem ipsum dolor sit, amet <br />
                    consectetur adipisicing elit. Ipsam cum voluptates <br />
                    unde, magnam ea aspernatur cupiditate provident
                  </span>
                </p>
              </div>

              <div>
                <BsLaptop />
                <p>
                  <b>4.Launch</b>
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
      </div>
    </>
  );
}
