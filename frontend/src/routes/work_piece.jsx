import React from "react";
import { useParams } from "react-router-dom";

const WorkPiece = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Product id: {id}</h1>
    </>
  );
};

export default WorkPiece;
