import "./SectionTitle.css";
import theme_pattern from "../../assets/theme_pattern.svg";

export default function SectionTitle({ title }) {
  return (
    <div className="section_title">
      <h1>{title}</h1>
      <img src={theme_pattern} alt="Title icon" />
    </div>
  );
}
