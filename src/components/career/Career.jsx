import React from "react";
import "./career.css";
import random from "../../assets/random.svg";
import raise_hand from "../../assets/raise-hand.svg";
import banner from "../../assets/banner-image.svg";
import hammer from "../../assets/hammer.svg";
const Career = () => {
  return (
    <div>
      <div className="career-title">Careers</div>
      <div className="banner">
  <h1 className="banner-text">
  
    <span className="white-text"> Make an impact </span> with your work
    <img src={banner} alt="" className="banner-image" 
    />
  </h1>
</div>
      <h5 className="goals">
      We’re a mission-driven team and it’s the dedication to our work that inspires us to take on complex healthcare challenges. It’s also what draws great talent. You can't solve challenges without failing and getting your hands dirty. And the best way to learn and improve for us has been to just do the work.
      </h5>
      <div className="image-row-4">
            <img className="random" alt="" src={random} />
          

          <div className="benefits-text-1">
            <h5 className = "career-heading">
              Why
              <span className="stake"> work </span>
              at Pacify Medical ?
            </h5>
            <h5 className="career-sub">
            MEANINGFUL WORK
            </h5>
            <h5 className="career-content">
            We develop solutions that transform how surgeries are performed and help save a life.
            </h5>
            <h5 className="career-sub">
            ENERGIZED ENVIRONMENT
            </h5>
            <h5 className="career-content">
            Opportunities to work with individuals who constantly challenge themselves to do better.
            </h5>
            <h5 className="career-sub">
            WORK WITH THE BEST
            </h5>
            <h5 className="career-content">
            Enjoy collaborating with an extraordinary team that is supported by global organizations.
            </h5>
            <h5 className="career-sub">
           BE A PART OF SOMETHING EXTRAORDINARY
            </h5>
            <h5 className="career-content">
            Join the spirit of innovation as we work together with a make-it-happen startup attitude and skills of a scale-up.
            </h5>

          </div>
        </div>
        <div className="image-row-4">
           
          

          <div className="fit-text">
            <h5 className = "career-heading">
            You are a 
              <span className="stake"> true fit </span>
              for  our culture. If?
            </h5>
            <h5 className="career-sub">
            CHARACTER
            </h5>
            <h5 className="career-content">
            Having the courage of your convictions, standing for what's right—not who’s right, sharing praise, and accepting responsibility.
            </h5>
            <h5 className="career-sub">
            CAPACITY
            </h5>
            <h5 className="career-content">
            Having a strong capacity to learn and grow and the ability to see patterns and figure out how to make progress.
            </h5>
            <h5 className="career-sub">
            ENERGY
            </h5>
            <h5 className="career-content">
            A willingness and excitement to put your capabilities to work in service of the customer and the mission.
            </h5>
            <h5 className="career-sub">
           EXPERIENCE
            </h5>
            <h5 className="career-content">
            Applying your unique experiences to new situations, helping us think in new ways so we grow, together.
            </h5>

          </div>
          <img className="random" alt="" src={random} />
        </div>
        <div className="image-row-4">
            <img className="random" alt="" src={random} />
          

          <div className="benefits-text-1">
            <h5 className = "career-heading">
            We are always looking for  
              <span className="stake"> 'willing to learn' </span>
              individuals 
            </h5>
            <h5 className="career-sub">
            FOR PERMANENT POSITION
            </h5>
            <h5 className="career-content">
            Would you like to work with us? With pleasure! We support you in using your experience to solve real problems and grow as an individual.
            </h5>
            <h5 className="career-sub">
            FOR INTERNSHIP/WORKING POSITIONS
            </h5>
            <h5 className="career-content">
            Would you like to do a summer internship with us? With pleasure! We support you in using your academic knowledge to solve real problems
            </h5>
            <h5 className="career-sub">
            FOR PROJECT STUDY/THESIS
            </h5>
            <h5 className="career-content">
            Would you like to complete a project study or write your thesis with us? With pleasure! We support you in choosing an interesting and suitable topic.
            </h5>
          </div>
        </div>
        <div className="part-2">
            <h3 className="open">
            Open positions
            </h3>
        </div>
        <h4 className="engineering">
        Engineering
        </h4>
        <div className="posting-1">
            <div className="list-1">
                <img src={hammer} alt="" className="hammer"  />
                <h5 id="position">
                Internship
                </h5>
            </div>
            <div className="location-1"></div>
        </div>
    </div>
  );
};

export default Career;
