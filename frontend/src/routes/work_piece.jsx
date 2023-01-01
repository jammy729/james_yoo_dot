import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";
const WorkPiece = () => {
  const { id } = useParams();
  const profile = Data.filter((profile) => profile.id == id);
  return (
    <>
      {profile.map((pr) => (
        <div key={pr.id}>
          <h2>{pr.title}</h2>
          <p>{pr.content}</p>
          <p>{pr.disclaimer}</p>
        </div>
      ))}
    </>
  );
};

export default WorkPiece;
