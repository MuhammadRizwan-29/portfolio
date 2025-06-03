import "./Services.css";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="container services">
      <SectionTitle title={"My Services"} />
      <div className="cards">
        {Services_Data.map((service, index) => {
          return (
            <div className="card" key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
