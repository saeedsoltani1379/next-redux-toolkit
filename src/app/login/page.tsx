"use client";

import React, { useState } from "react";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = () => {
    const reponse = {
      token: "hfjkhdsjhf879d6a5d6sasdag668asbd",
      expired: 7,
    };
    Cookie.set("token", reponse.token, { expires: reponse.expired });
    redirect("/dashboard");
  };
  return (
    <div className="flex flex-col mt-44 items-center">
      <div className="flex flex-col bg-blue-900 p-16 rounded-lg space-y-7">
        <input
          className="text-center border p-6 rounded-md w-64 text-white"
          onChange={(e) => setuserName(e.target.value)}
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          className="text-center border p-6 rounded-md w-64 text-white"
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="password"
          name="password"
        />
        <button
          onClick={handleLogin}
          className="p-4 rounded-lg text-center bg-green-600 hover:scale-110"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
