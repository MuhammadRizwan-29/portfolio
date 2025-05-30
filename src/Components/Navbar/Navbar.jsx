import "./Navbar.css";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="container">
      <img src={logo} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="connect">Connect with Me</div>
    </header>
  );
}
