import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Uday </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a full-stack web developer with a solid track record of
            designing, developing, and maintaining dynamic web applications.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/photo.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
