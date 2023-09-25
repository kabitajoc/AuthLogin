import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", "YourAccessTokenHere");

        setErrMsg("");
        setSuccessMessage("Authentication successful");

        // Navigate to the /dashboard route
        navigate("/dashboard");
      } else {
        setErrMsg(
          "Authentication failed. Please check your email and password."
        );

        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-center justify-center p-8 gap-5 rounded-lg shadow-lg bg-slate-800 text-white w-2/4 m-auto"
    >
      <div className="flex flex-col justify-center w-full">
        <label className="flex justify-start text-lg font-bold tracking-wide">
          Email
        </label>
        <input
          type="email"
          className="border rounded-md text-black p-2 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center w-full">
        <label className="flex justify-start text-lg font-bold tracking-wide">
          Password
        </label>
        <input
          type="password"
          className="border rounded-md text-black p-2 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="border rounded-md mt-8 w-28 bg-slate-600"
      >
        Login
      </button>
      {errmsg && <p className="text-red-500 mt-4">{errmsg}</p>}
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
    </form>
  );
};

export default Login;
