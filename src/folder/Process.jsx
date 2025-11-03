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
            My workflow as a Full-Stack Developer follows a clear, structured
            process <br /> — from understanding problems to delivering
            production-ready solutions <br /> that are scalable and user-focused.
          </p>
        </div>

        <div className={styles.listswork}>
          {/* 1. Research */}
          <div className={styles.listswork12}>
            <div>
              <span
                style={{
                  backgroundColor: "#131c9cff",
                  width: "2rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>
              <p>
                <GiArchiveResearch
                  style={{
                    color: "#07e241ff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}> 1. Research: </b>
                <span> Gather requirements, analyze the problem, and identify the
                  target users and goals. Define the project scope, tech stack,
                  and  deliverables before writing any code.
                </span>
              </p>
            </div>

            {/* 2. Design */}
            <div>
              <span
                style={{
                  backgroundColor: "#b5e31fff",
                  width: "2rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>
              <p>
                <SiInteractiondesignfoundation
                  style={{
                    color: "#e31f1fff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}>2. Design:</b>
                <span> Create UI/UX mockups and user flows using br Figma or similar
                  tools. Plan responsive layouts  and component structures for
                  smooth user experience across devices.
                </span>
              </p>
            </div>
          </div>

          {/* 3. Develop */}
          <div className={styles.listswork34}>
            <div>
              <span
                style={{
                  backgroundColor: "#e31f1fff",
                  width: "2rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>
              <p>
                <IoMdAnalytics
                  style={{
                    color: "#b5e31fff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}>3. Develop:</b>
                <span> Build both frontend and backend. Develop reusable React
                  components, REST APIs, and secure database logic. Test and
                  integrate all parts to ensure performance and reliability.
                </span>
              </p>
            </div>

            {/* 4. Launch */}
            <div>
              <span
                style={{
                  backgroundColor: "#1fe322ff",
                  width: "2rem",
                  borderRadius: "7px 0 0 7px",
                }}
              ></span>
              <p>
                <BsLaptop
                  style={{
                    color: "#131c9cff",
                    fontSize: "2rem",
                    marginRight: "0.5rem",
                  }}
                />
                <b style={{ fontSize: "1.8rem" }}>4. Deploy:</b>
                <span> Deploy applications to production using platforms like Vercel,
                  Render, or AWS. Configure CI/CD pipelines, monitor
                  performance, and maintain code for continuous improvement.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
