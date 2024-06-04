import React from "react";
import { useParams } from "react-router-dom";

export default function B1() {
  const { id } = useParams();
  return (
    <>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
    </>
  );
}
