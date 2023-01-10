import React from "react";
import Intro from "../../components/intro_gallery";
import WorkGallery from "../../components/work_gallery";
const home = () => {
  return (
    <React.Fragment>
      <Intro
        name="Hello, I'm James Yoo"
        role="Front-end Developer | UX Engineer"
        intro="Welcome to my site! I am fifth year undergraduate student at Simon Fraser University (SFU) majoring in BSc Interactive Arts and Technology. I am an user-centered front-end developer mainly working with React/React Native JS framework. I love problem solving and designing with code."
        primary_btn="See Work"
        primary_link="/work"
        secondary_btn="Contact Me"
        secondary_link="/contact"
      />
      <WorkGallery />
    </React.Fragment>
  );
};

export default home;
