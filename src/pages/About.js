import React from "react";
import logo2 from "../components/images/logo-2.png";
import logo3 from "../components/images/logo-3.png";
import logo4 from "../components/images/logo-4.png";

export default function Contacts() {
  let message = "Thank you for your audience today!";
  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title">The Team Behind the Weather APP</h2>

            <p class="section-subtitle">{message}</p>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src={logo2} class="logo" alt="" />
              <h3>Zeinab Abu</h3>
              <div class="team-info">
                <p>Boss of the Team</p>
              </div>
              <p>
                There are only two kinds of programming languages out there. The
                ones people complain about and the ones no one uses.
              </p>

              <ul class="team-icon">
                <li>
                  <a href="#" class="twitter">
                    <i class="fa-solid fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="dribble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src={logo3} class="logo" alt="" />

              <h3>Louise</h3>

              <div class="team-info">
                <p>Creative Specialist</p>
              </div>

              <p>
                Some people can't sleep because they have insomnia - I can't
                sleep because coding makes me stay awake
              </p>

              <ul class="team-icon">
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="dribble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src={logo4} class="logo" alt="" />

              <h3>Gulim</h3>
              <div class="team-info">
                <p> Specialist of Specialist</p>
              </div>

              <div class="team-info">
                <p></p>
              </div>

              <p>
                {" "}
                I don’t know what’s worse, my design skills, or my design after
                I try to make it with CSS.
              </p>

              <ul class="team-icon">
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="dribble">
                    <i class="fa fa-dribbble"></i>
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
