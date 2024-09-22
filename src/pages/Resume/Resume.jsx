import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import Timeline from "./Timeline";
import SkillItem from "./SkillItem";
const Resume = () => {
    return (
      <section>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
  
        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaBookReader />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <Timeline
              title="Navarasam Instituite Of arts and Science - Erode."
              date="2011 — 2014"
              description="Completed a Bachelor's degree in Computer Science, gaining a solid foundation in software development, programming languages, and database management. Actively participated in various projects and workshops, enhancing technical skills and fostering teamwork and creativity"
            />             
          </ol>
        </div>
  
        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaRegBookmark />
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            <Timeline
              title="Knila IT Solution India Pvt Ltd - Coimbatore."
              date="Mar2024 — Present"
              description="Designed and implemented software solutions, focusing on API development and integration to enhance functionality at Knila IT Solutions."
            />
             <Timeline
              title="The Madras Silks India Pvt Ltd -  Chennai."
              date="July2021 — Feb2024"
              description="Developed and maintained web applications by leveraging expertise in both front-end and back-end technologies, delivering seamless user experiences"
            />
            <Timeline
              title="Silicon Infotech - Tirupur."
              date="Sep2018 — June2021"
              description="Provided comprehensive service and support for IT infrastructure, ensuring optimal performance of hardware and networking systems."
            />
            <Timeline
              title="The Chennai Silks - Tirupur."
              date="Aug2014 — Aug2018"
              description="Managed and maintained IT infrastructure, ensuring optimal performance of hardware and networking systems."
            />
          </ol>
        </div>
  
        <div className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            <SkillItem title="Angular" value={80} />
            <SkillItem title=".Net Core" value={80} />
            <SkillItem title="MS Sql Server" value={90} />
            <SkillItem title="Azure Cloud" value={80} />
          </ul>
        </div>
      </section>
    );
  };
  
  export default Resume;