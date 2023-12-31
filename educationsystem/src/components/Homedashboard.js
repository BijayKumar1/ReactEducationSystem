import React from "react";
import "../css/demobootstrapportfoliowesite.css";
//import { Link } from "react-router-dom";
import NavBarHome from "./NavBarHome";
import "../css/demobootstrapportfoliowesite.css";
//import mainbganimation1 from "../images/mainbganimation1.gif";
import elearninganimation from "../images/18365-animaton-for-e-learning-web-site.gif";
import learner from "../images/learner.svg";
import instructor from "../images/instructor.svg";
import administrator from "../images/administrator.svg";
import reactnative from "../images/hire-reactnative01.png";
import service1 from "../images/service01.png";
import e3 from "../images/e3.jpg";
import reactjs from "../images/ReactJS.png";
import logo from "../images/logoonly-removebg-preview.png"; 

function Homedashboard() {
  return (
    <div >

    <NavBarHome/>
      {/* <h1 style={{fontSize:"60px"}}>My Dashboard</h1> */}
      <hr></hr>
      {/* <div > */}
       

      {/* <p>
        <Link to="/getAllTrainers"  style={{  color: "yellow", fontSize:"30px"}}>Click Here AllTrainers</Link>
      </p>
  
      <p>
        <Link to="/trainer/save"  style={{  color: "red", fontSize:"30px"}}>Click Here for Add new Trainers</Link>
      </p> */}

      {/* <button> <p>
        <Link to="/student/login"  style={{  color: "red", fontSize:"30px"}}>Click Here for Student login</Link>
      </p></button> */}
      {/* <button><p>
        <Link to="/admin/login"  style={{  color: "red", fontSize:"30px"}}>Click Here for Admin Login</Link>
      </p></button> */}
     
      {/* </div> */}
      <div class="hero">
          <section id="hero">
            <div class="container">
              <div class="row">
                <div class="col">
                  {/* <img class="wave" src={mainbganimation1} alt="wave" /> */}
                  <div class="name">
                    edu<span>cation</span> hub
                  </div>
                  <p class="tagline">
                    The Purpose is to teach, bring learning to people
                  </p>
                  <p>
                    <b style={{ fontSize: "large" }}>
                      Transform your career through education and change the
                      world by learning restless. Explore critical skills for
                      the year ahead. Courses start at just 399INR. <br />
                    </b>
                  </p>
                </div>
                {/* <div class="col img-col">
                  <img
                    src={elearninganimation}
                    alt="Online Learning"
                    class="img-fluid"
                  />
                </div> */}
              </div>
              <div class="row cards">
                <div class="col-md-4 d-flex justify-contents">
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <img src={learner} alt="learner" class="icon" />
                      <h5 class="card-title">Learner</h5>
                      <p class="card-text">
                        Build your knowledge by exploring various courses.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 d-flex justify-contents">
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <img src={instructor} alt="instructor" class="icon" />
                      <h5 class="card-title">Instructor</h5>
                      <p class="card-text">
                        Connect with best trainers to gain knowledge.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 d-flex justify-contents">
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <img
                        src={administrator}
                        alt="administrator"
                        class="icon"
                      />
                      <h5 class="card-title">Administrator</h5>
                      <p class="card-text">
                        Drop your queries to admin and give feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="about-us">
          <div class="container">
            <div class="row align-items-center">
              <div class="col">
                <img src={reactnative} alt="react" class="img-fluid" />
              </div>
              <div class="col">
                <h1>About Us</h1>
                <h6>
                  "Learning is not attained by chance, it must be sought with
                  ardor and attended to with diligence." ---Abigail Adams
                </h6>
                <p>
                  As a global nonprofit, we're relentlessly pursuing our vision
                  of a world where every learner can access education to unlock
                  their potential, without the barriers of cost or location..
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="courses">
          <div class="container" id="Courses">
            <div class="row align-items-center courses">
              <div class="col">
                <h1>Our Top Courses</h1>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-md-4">
                <div class="card mb-3">
                  <img src={service1} class="card-img-top" alt="service1" />
                  <div class="card-body">
                    <h5 class="card-title">React Native</h5>
                    <p class="card-text">
                      The complete React Native course ( 2022 edition ).
                    </p>
                    <div class="d-flex justify-content-between">
                      <p class="card-text">
                        <small class="text-muted">Course </small>
                      </p>
                      <h5 class="price">6,999INR.</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-3">
                  <img src={e3} class="card-img-top" alt="image" />
                  <div class="card-body">
                    <h5 class="card-title">HTML and CSS</h5>
                    <p class="card-text">
                      Build Responsive Real World Websites with HTML5 and CSS3.
                    </p>
                    <div class="d-flex justify-content-between">
                      <p class="card-text">
                        <small class="text-muted">Course </small>
                      </p>
                      <h5 class="price">5,999INR.</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-3">
                  <div class="ribbon">
                    <span class="ribbon-span">Bestseller</span>
                  </div>
                  <img src={reactjs} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">React JS</h5>
                    <p class="card-text">
                      The Complete Guide (incl Hooks, React Router, Redux).
                    </p>
                    <div class="d-flex justify-content-between">
                      <p class="card-text">
                        <small class="text-muted">Course </small>
                      </p>
                      <h5 class="price">7,999INR.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <div class="icon">
                  <i
                    class="fa fa-twitter fa-3x"
                    style={{ color: "lightblue" }}
                  ></i>
                  <i
                    class="fa fa-instagram fa-3x"
                    style={{ color: "rgb(250, 93, 93)" }}
                  ></i>
                  <i
                    class="fa fa-facebook fa-3x"
                    // style="color: rgb(99, 99, 206);"
                    style={{ color: "rgb(99, 99, 206)" }}
                  ></i>
                </div>
                <h1>Connect With US</h1>
                <p>
                   <strong>educationhub@gmail.com</strong>
                </p>
                <div class="div d-flex justify-content-between">
                  <div class="left">
                    {/* <img class="logo" src={logo} />{" "} */}
                    <b>
                      <large>EDUCATION</large>
                    </b>
                  </div>
                  {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}

                
                  {/* <p class="right">© 2022 EducationHub, inc </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </div>
  );
}

export default  Homedashboard;
