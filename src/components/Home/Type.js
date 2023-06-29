import React from "react";
import Typewriter from "typewriter-effect";
 
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Fullstack Developer",
          "Search Engine Optimizer",
          "Content Creator",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
         
      }}
     
    />
  );
}

export default Type;


