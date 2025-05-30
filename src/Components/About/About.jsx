import "./About.css";
import profile_img from "../../assets/about_profile.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
  return (
    <section className="container about_section">
      <SectionTitle title={"About me"} />
      <div className="about">
        <div className="left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="right">
          <div className="descr_info">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="skills">
            <div className="skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="skill">
              <p>WordPress Frontend</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="skill">
              <p>React & TailwindCSS</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>50+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  );
}
