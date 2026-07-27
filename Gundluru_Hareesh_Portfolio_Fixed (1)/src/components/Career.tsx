import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Tech Vaseegrah</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built React.js components for a WhatsApp Business API messaging
              application, consuming REST APIs and using hooks to fetch and
              display live data. Integrated Shopify and WooCommerce order data
              into the UI and improved responsiveness across screen sizes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Published Research Paper</h4>
                <h5>IJIRT Journal</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Co-authored and published "NeuroArtify: AI-Based Image
              Transformation Platform," describing the system architecture of
              an AI-powered image transformation web app built with React.js
              and Flask.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science</h4>
                <h5>Dhanalakshmi Srinivasan University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Final-year Computer Science Engineering student, actively
              building full-stack projects with Java, Spring Boot, and
              React.js while seeking full-time opportunities as a Java Full
              Stack Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
