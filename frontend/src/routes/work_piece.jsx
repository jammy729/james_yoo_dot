import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const work_piece = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(null);

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
            {data.section_1 && (
              <>
                <div>
                  <img
                    src={data.section_0?.image}
                    alt={data.section_0?.image_caption}
                    className="img-full"
                  />
                  <h3>{data.section_0?.heading}</h3>
                  <p>{data.section_0?.text}</p>
                </div>
                <hr />
              </>
            )}
            {data.section_1 && (
              <React.Fragment>
                {/* part 1 */}
                <div>
                  <h3>{data.section_1?.object_2.heading}</h3>
                  <img
                    src={data.section_1?.object_1.image}
                    alt={data.section_1?.object_1.image_caption}
                    className="img-full"
                  />
                  <p>{data.section_1?.object_1.text}</p>
                </div>

                {/* part 2 */}
                <div>
                  <h5>{data.section_1?.object_2.heading}</h5>
                  <div className="img-container">
                    <img
                      src={data.section_1?.object_2.image}
                      alt={data.section_1?.object_2.image_caption}
                      className="img-full"
                    />
                    <caption style={{ display: "block" }}>
                      {data.section_1?.object_2.image_caption}
                    </caption>
                  </div>
                  <p>{data.section_1?.object_2.text}</p>
                </div>
                <hr />

                {/* part 3 */}
                <div>
                  <h5>{data.section_1?.object_2.heading}</h5>
                  <div className="img-container">
                    <img
                      src={data.section_1?.object_2.image}
                      alt={data.section_1?.object_2.image_caption}
                      className="img-full"
                    />
                    <figcaption style={{ display: "block" }}>
                      {data.section_1?.object_2.image_caption}
                    </figcaption>
                  </div>
                  <p>{data.section_1?.object_2.text}</p>
                </div>
                <hr />
              </React.Fragment>
            )}
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default work_piece;
