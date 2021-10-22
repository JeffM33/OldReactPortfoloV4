import "./about.css";
import "../../img/me.jpg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="../../img/me.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="portrait"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I recently completed a boot camp for Full Stack Web Development through Southern Methodist University. 
        </p>
        <p className="a-desc">
          I am knowledgeable in Javascript, HTML, CSS, Node JS, React, and git. Throughout the course we worked on several different projects on the front end and back end. This is all available on my git profile to check out. 

          I started coding in Highschool as a hobby in dark basic. In college I took a few classes but never explored a focus in programming. Upon graduating from Austin College I believed I wanted to do sales, and pursued a career in sales for multiple years. Recently I found my passion in creation of different projects through Web Development. I expanded my knowledge and skills through the boot camp to become job ready. 
        </p>
      </div>
    </div>
  );
};

export default About;