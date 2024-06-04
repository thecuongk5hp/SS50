import React from "react";
import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return (
    <div>
      <h2>Chi tiết nhóm cho ID nhóm: {teamId}</h2>
    </div>
  );
}
