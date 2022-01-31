import "./contactme.css";

function Contactme() {
  return (
    <div className="main-header-contact">
      <h3 className="sub-header-contact">
        This project was created in 7 days!
      </h3>
      <div className="contact">
        <div className="github">
          <img
            src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641240568/github-logo-silhouette-in-a-square_1_jbzisx.png"
            href="https://github.com/Hayden-Arnold"
            alt="github-icon"
            className="icons"
          />
        </div>
        <div className="linkedin">
          <img
            src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641240666/linkedin_2_obv2rd.png"
            href="https://www.linkedin.com/in/hayden-arnold-503997222/"
            alt="linkedin-icon"
            className="icons"
          />
        </div>
      </div>
    </div>
  );
}

export default Contactme;
