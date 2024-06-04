// src/components/B4.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function B4() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("studentName");

  return (
    <>
      <p>Student Name: {name}</p>
    </>
  );
}
