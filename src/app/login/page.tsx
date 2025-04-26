"use client";

import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { userName, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 mt-40 ">
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        className="border py-3 px-20 rounded text-center"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border px-20 py-3 rounded text-center"
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
        Login
      </button>
    </form>
  );
}

export default Login;