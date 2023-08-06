import React from "react";
import CV from "../assets/Dunst Resume.pdf";
import Resume from "./Resume";

const Header = () => {




  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };



  const openResume = () => {
    window.open(CV, "Dunst Resume.pdf"); // Open the PDF in a new browser tab
  };





  return (
    <div>
      <div className="headerConatiner">
        <ul className="linkContainer">
          <a href="spicy" className="nav__logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsOxv6UAiGwL2tSXdFUM0rM63enIOaDz2eQ&usqp=CAU"
              alt="Nevergiveup"
            />
          </a>
          <li>
            <a href="#about" onClick={scrollToAbout}>
              About
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume" onClick={openResume}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;