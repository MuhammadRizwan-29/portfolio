import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="ft__top">
        <div className="left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>
            I am a frontend developer from California, USA with 10 years of
            experience in multiple companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="right">
          <div className="email-input">
            <img src={user_icon} alt="User icon" />
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="ft_subscriber">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="ft__bottom">
        <div className="left">
          <p>&copy; 2025 Alex Bennett. All rights reserved</p>
        </div>
        <div className="right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
}
