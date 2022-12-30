import React from "react";
import Intro from "../../components/intro_gallery";
import WorkGallery from "../../components/work_gallery";
const home = () => {
  return (
    <React.Fragment>
      <Intro
        name="James Yoo"
        role="Front-end Developer | UX Engineer"
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
