import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <header className="container">
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <AnchorLink className="anchor_link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} alt="underline icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor_link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={underline} alt="underline icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor_link" href="#services" offset={50}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={underline} alt="underline icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor_link" href="#work" offset={50}>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? (
            <img src={underline} alt="underline icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor_link" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={underline} alt="underline icon" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="connect">
        <AnchorLink className="anchor_link" href="#contact" offset={50}>
          Connect with Me
        </AnchorLink>
      </div>
    </header>
  );
}
