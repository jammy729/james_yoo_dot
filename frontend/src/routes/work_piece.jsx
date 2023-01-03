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
        console.log(response);
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
      <section id="work_layout" className="container-fluid">
        {detail.map((data, index) => (
          <div className="work_layout__container" key={index}>
            <div className="work_header">
              <Link to="/work">
                <h5>Works &gt;</h5>
                <h4>{data.title}</h4>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default work_piece;
