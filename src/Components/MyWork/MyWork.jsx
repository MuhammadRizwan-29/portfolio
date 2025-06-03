import "./MyWork.css";
import My_Work from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function MyWork() {
  return (
    <section className="container my_work">
      <SectionTitle title={"My Work"} />

      <div className="works">
        {My_Work.map((work, index) => {
          return <img src={work.w_img} alt="work imgae" key={index} />;
        })}
      </div>
      <div className="showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Show more" />
      </div>
    </section>
  );
}
