import React from "react";
import { useParams } from "react-router-dom";

const work_piece = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Product id: {id}</h1>
    </>
  );
};

export default work_piece;
