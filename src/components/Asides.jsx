import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
const Asides = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img src="images/ME.jpg" 
                 alt="Prabhakaran T"
                 width="80"
                 />
            </figure>
            <div className="info-content">
                <h1 className="name">Prabhakaran T</h1>
                <p className="title">Software Developer</p>
            </div>

            <button className="info_more-btn">
            <span>Show Contacts</span>
            <GiClawSlashes />
          </button>
        </div>

    {/* Contact info */}
    <div className="sidebar-info_more">
          <hr className="separator2"></hr>

            <ul className="contacts-list">

            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="prabhakarant1991@gmail.com" className="contact-link">
                prabhakarant1991@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="9942577716" className="contact-link">
                +91 9942577716
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time>
                1991-02-11
                </time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Country</p>
                <address >
                India
                </address>
              </div>
            </li> 

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address >
                Coimbatore
                </address>
              </div>
            </li> 
            

            


            </ul>
          
    </div>
        

    </aside>
  )
}

export default Asides