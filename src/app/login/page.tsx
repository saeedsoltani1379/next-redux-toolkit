"use client";

import { useState } from "react";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {
    const response = {
      token: "876das7d6bs7d697a6dasb6d",
      expire: 2,
    };
    Cookie.set("token", response.token, { expires: response.expire });
    redirect("/dashboard")
  };

  return (
    <div className="flex flex-col justify-center mt-40">
      <div className=" flex flex-col space-y-6  mx-auto">
        <input
          onChange={(e) => setuserName(e.target.value)}
          className="border p-2 text-center w-80 rounded-md"
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          className="border p-2 text-center rounded-md"
          type="password"
          placeholder="password"
        />
        <button
          onClick={handleLogin}
          className="bg-green-600 p-4 m-1 rounded-md"
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Login;
