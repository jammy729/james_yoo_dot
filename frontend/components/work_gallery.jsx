import React from "react";
import { Link } from "react-router-dom";
import data from "../data/gallery.json";
const workGalleryItems = [
  {
    title: "Brixwork Real Estate Marketing",
    path: "/work/brixwork",
    excerpt:
      "Develop IDX integrated websites that fit the brand guidelines for Real Estate professionals",
    image:
      "https://james-yoo-portfolio.vercel.app/static/media/cover.a3f6d2ab094c3295cae6.png",
  },
  {
    title: "World Institution Database",
    path: "/work/institution-database",
    excerpt:
      "A functional web application that allows users to browse through a list of institutions.",
    image:
      "https://james-yoo-portfolio.vercel.app/static/media/cover-worldinstitution.ac97395f69d35942d4ee.png",
  },
  {
    title: "Educational Visual Analytics",
    path: "/work/visual-analytics",
    excerpt:
      "Designed and implemented an interactive visualization for multidimensional data.",
    image:
      "https://james-yoo-portfolio.vercel.app/static/media/cover2.a91e287afd734e628728.png",
  },
];

const work_gallery = () => {
  return (
    <React.Fragment>
      <section id="work_gallery" className="container-fluid">
        {workGalleryItems.map((data, workIndex) => (
          <div className="work_container" key={workIndex}>
            <Link to={data.path}>
              <div
                className="work_item"
                style={{
                  backgroundImage: `url(${data.image})`,
                }}
              >
                <div className="overlay dark"></div>
                <div className="work_text">
                  <div className="work_title" id="h2_style">
                    {data.title}
                  </div>
                  <div className="work_excerpt" id="h5_style">
                    {data.excerpt}
                  </div>
                  <div className="btn_container">
                    <div className="btn primary">View Work</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default work_gallery;
