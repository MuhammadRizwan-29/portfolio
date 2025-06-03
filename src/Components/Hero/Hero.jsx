import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

export default function Hero() {
  return (
    <section className="container hero_section" id="#home">
      <img src={profile_img} alt="Profile Image" />
      <h1>
        <span>I'm Alex Bentto,</span> Frontend Developer based in USA
      </h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="action">
        <div className="connect">Connect with me</div>
        <div className="resume">My resume</div>
      </div>
    </section>
  );
}
