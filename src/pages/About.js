import React from "react";
import logo2 from "../components/images/logo-2.png";
import logo3 from "../components/images/logo-3.png";
import logo4 from "../components/images/logo-4.png";
import "./About.css";

export default function Contacts() {
  let message = "Thank you for your audience today!";
  return (
    <section className="section-white">
      <div className="about-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind the Weather APP</h2>

            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={logo2} className="logo" alt="" />
              <h3 className="name">Zeinab Abu</h3>
              <div className="team-info">
                <p>Boss of the Team</p>
              </div>
              <p>
                There are only two kinds of programming languages out there. The
                ones people complain about and the ones no one uses.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={logo3} className="logo" alt="" />

              <h3 className="name">Louise</h3>

              <div className="team-info">
                <p>Creative Specialist</p>
              </div>

              <p>
                Some people can't sleep because they have insomnia - I can't
                sleep because coding makes me stay awake
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={logo4} className="logo" alt="" />

              <h3 className="name">Gulim</h3>
              <div className="team-info">
                <p> Specialist of Specialist</p>
              </div>

              <div className="team-info">
                <p></p>
              </div>

              <p>
                {" "}
                I don’t know what’s worse, my design skills, or my design after
                I try to make it with CSS.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
