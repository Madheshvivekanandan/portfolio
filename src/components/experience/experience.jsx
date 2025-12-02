import data from "../../assets/mydata.json";
import './experience.css';
export default function Experience() {
  return (
    <div>
      <h2 className="section-heading">Experience</h2>
      {data.experience.map((item, index) => (
        <div key={index} className="experience-card">
          <div
            className="logo"
            style={{ backgroundColor: item.companyColor }}
          >
            {item.companyCode}
          </div>

          <div>
            <h3>{item.role}</h3>
            <p>{item.company} · {item.employmentType}</p>
            <p>
              {item.startDate} - {item.endDate} · {item.duration}
            </p>
            <p>{item.location}</p>
            {item.description && <em>{item.description}</em>}
          </div>
        </div>
      ))}
    </div>
  );
}
