import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const predefinedUser = {
    email: "pnguyenthecuongk5@gmail.com",
    password: "password123",
    role: "Admin",
  };
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      email === predefinedUser.email &&
      password === predefinedUser.password &&
      role === predefinedUser.role
    ) {
      navigate("/account");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <form action="" className="d-flex flex-column w-25 gap-3">
        <h4 className="text-center">Đăng nhập</h4>
        <input
          type="text"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          name=""
          id=""
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Chọn quyền --</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Đăng nhập
        </button>
        {error && (
          <div className="alert alert-danger text-danger mt-2">
            Thông tin đăng nhập không hợp lệ
          </div>
        )}
      </form>
    </div>
  );
}
