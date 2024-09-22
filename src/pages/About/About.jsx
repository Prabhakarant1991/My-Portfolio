import Service from "./Service"
import { useState, useEffect } from "react"
import Testimonial from "./Testimonial"

const About = () => {

  //  Getting the Testimonial data From JSON file availabel in Public folder
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    fetch('testimonial.json')
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setTestimonials(data)
      })
  }, [])

  //  Getting the Services data From JSON file availabel in Public folder
  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setServiceData(data);
      })
  }, [])

  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          A dynamic Full Stack Developer with a strong focus on Angular, C#, .NET Core/Framework, and SQL Server. Skilled in developing and maintaining web applications, specializing in API development and integration. Proficient in problem-solving and adaptable to evolving project requirements. Currently contributing to projects at Knila IT solutions Pvt Ltd.
        </p>

         
      </section>

      {/* Services */}
      <section className="services">
        <h2 className="h3 service-title">What Im Doing</h2>
      </section>
      <ul className="service-list">
        {
          serviceData.map((service, index) => (
            <Service key={index} title={service.title} icon={service.icon} description={service.description} />
          ))
        }
      </ul>

      
    </div>
  )
}

export default About