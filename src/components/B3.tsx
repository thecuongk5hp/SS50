// src/components/B3.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function B3() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/student?studentName=${inputValue}`);
  };

  return (
    <div style={{ width: "430px" }}>
      <input
        className="w-75 h-100"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <button className="btn btn-primary mx-2" onClick={handleSearch}>
        Tìm kiếm
      </button>
    </div>
  );
}
