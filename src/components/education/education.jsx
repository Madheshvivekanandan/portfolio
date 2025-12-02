import data from "../../assets/mydata.json";
import './education.css';
export default function Education() {
  return (
    <div>
      <h2 className="section-heading">Education</h2>
      {data.education.map((edu, index) => (
        <div key={index} className="education-card">
          <div
            className="logo"
            style={{ backgroundColor: edu.instituteColor }}
          >
            {edu.instituteCode}
          </div>

          <div>
            <h3>{edu.institute}</h3>
            <p>{edu.degree}</p>
            <p>{edu.startYear} - {edu.endYear}</p>
            <p>{edu.location}</p>

            <div className="tags">
              {edu.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
