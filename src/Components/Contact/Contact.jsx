import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";

export default function Contact() {
  return (
    <section id="contact" className="container contact">
      <SectionTitle title={"Get in touch"} />
      <div className="details">
        <div className="left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact_details">
            <div className="detail">
              <img src={mail_icon} alt="Contact Detail Icon" />
              <p>mrdev@portfolio.com</p>
            </div>
            <div className="detail">
              <img src={call} alt="Contact Detail Icon" />
              <p>+92 300 0000000</p>
            </div>
            <div className="detail">
              <img src={location_icon} alt="Contact Detail Icon" />
              <p>Main Bizerta Line, Sharah-e-Faisal Karachi</p>
            </div>
          </div>
        </div>
        <div className="right">
          <form>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your Email" />
            <label>Write your message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your Message"
            ></textarea>
            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
