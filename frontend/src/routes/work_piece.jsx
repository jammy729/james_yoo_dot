import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const work_piece = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(null);
  const count = 10;

  const fetchDetails = () => {
    axios
      .get(`../../data/${id}.json`)
      .then((response) => {
        setDetail(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  let index = 0;
  let counter;
  while (index < 10) {
    counter = index;
    index++;
    console.log(counter);
  }
  return (
    <React.Fragment>
      <section id="work_layout" className="container-layout">
        {detail.map((data, index) => (
          <div className="work_layout__container" key={index}>
            {/* header */}
            <div className="work_header">
              <Link to="/work">
                <h5>Works &gt;</h5>
              </Link>
              <h4>{data.title}</h4>
            </div>
            {/* cover image */}
            <div className="work__cover_image">
              <img
                src={data.cover_image}
                alt={data.cover_image_alt}
                className="img-responsive"
              />
            </div>
            {/* tags */}
            <div className="work__tags">
              <div className="work_type">
                <span className="badge">Type</span>
                <span className="badge_desc">{data.type}</span>
              </div>
              <div className="work_skills">
                <span className="badge">Skills</span>
                <span className="badge_skills">{data.skills}</span>
              </div>
              <div className="work_source">
                <span className="badge">Source</span>
                <span className="badge_skills">
                  <Link to={data.source}>{data.source_tag}</Link>
                </span>
              </div>
            </div>
            {/* work descriptions  */}
            <hr />
            {data.writing.heading && (
              <>
                <div>
                  <img src={data.writing.image} alt="" />
                  <h3>{data.writing.heading}</h3>
                  <p>{data.writing.text1}</p>
                </div>
                <hr />
              </>
            )}
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default work_piece;
