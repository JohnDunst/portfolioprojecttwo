import React, { useRef } from "react";
import CV from "../assets/Dunst Resume.pdf";
import Header from "./Header";

const Resume = () => {
  const resumeLinkRef = useRef(null);

  const openResume = () => {
    window.open(CV, "Dunst Resume.pdf"); // Open the PDF in a new browser tab
  };
  React.useEffect =
    (() => {
      if (resumeLinkRef.current) {
        resumeLinkRef.current.addEventListener("click", openResume);
      }
      return () => {
        if (resumeLinkRef.current) {
          resumeLinkRef.current.removeEventListener("click", openResume);
        }
      };
    },
    []);
};

export default Resume;