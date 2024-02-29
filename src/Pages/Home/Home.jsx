import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import homeImg from '../../Assests/home.png'

export default function Home(currentPage) {
  return (
    <div>
      <Navbar currentPage={currentPage} />
      <div className="homeContainer">
        <div class="home-content">
          <h3 class="me">Hello,It's Me</h3>
          <h1>Thilina Dilshan</h1>
          <h3>
            And I'm a <span class="multi-text"> </span>
          </h3>
          <p>
            I'm a Graphic Designer, Programmer, Web developer and a UI/UX
            Designer. I'm a Undergraduate Student at Eastern University Sri
            Lanka.
          </p>
          <div class="sociel-media">
            <a href="www.facebook.com">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="www.instagram.com">
              <i class="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/thilina-dilshan-b4bb8920a/">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
          <a href="https://twitter.com/" class="btn">
            Download CV
          </a>
        </div>

        <div class="home-img">
          <img src={homeImg} alt="my img" />
        </div>
      </div>
    </div>
  );
}
