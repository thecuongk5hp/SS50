import React from "react";
import { useParams } from "react-router-dom";

export default function B2() {
  const { name } = useParams();
  return (
    <>
      <p>name = {name}</p>
    </>
  );
}
