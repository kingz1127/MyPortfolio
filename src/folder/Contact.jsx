import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiSend } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    subject: "", 
    message: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch("https://adedejiportfolio.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    // Log the full response for debugging
    console.log("Response:", data);

    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setForm({
        name: "",
        email: "",
        location: "",
        subject: "",
        message: "",
        phone: "",
      });
    } else {
      setStatus(`❌ Failed: ${data.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error("Error sending message:", error);
    setStatus("❌ Something went wrong. Please try again.");
  }
};

  return (
    <div className={styles.ContactBody}>
      <div>
        <h2>Let's discuss your Project</h2>

        <div className={styles.location}>
          <div className={styles.goLocation}>
            <GoLocation />
          </div>
          <div>
            <p>Address: 45, church street, Alapere-Ketu Lagos</p>
            <br />
            <p>Nigeria</p>
          </div>
        </div>

        <div className={styles.location}>
          <div className={styles.goLocation}>
            <AiOutlineMail />
          </div>
          <div>
            <p>
              My Email:{" "}
              <a href="mailto:osunyingboadedeji1@gmail.com">
                osunyingboadedeji1@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className={styles.location}>
          <div className={styles.goLocation}>
            <IoMdCall />
          </div>
          <div>
            <p>
              Call Me Now: <a href="tel:+2348131817432">+2348131817432</a>
            </p>
          </div>
        </div>

        <div className={styles.mySocials}>
          <a
            href="https://web.facebook.com/djcom1991/"
            className={styles.f}
          >
            <CgFacebook />
          </a>
          <a
            href="https://www.instagram.com/kingz_1127"
            className={styles.i}
          >
            <BsInstagram />
          </a>
          <a
            href="https://wa.me/2348131817432/?text=Hello%20there!"
            className={styles.w}
          >
            <BsWhatsapp />
          </a>
          <a
            className={styles.li}
            href="https://www.linkedin.com/in/adedeji-oshunyingbo-58243432b/"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className={styles.messageMe}>
        <h4>Contact</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
          />
          <button type="submit">
            Submit <BiSend />
          </button>
        </form>
        <p>{status}</p>
      </div>
    </div>
  );
}