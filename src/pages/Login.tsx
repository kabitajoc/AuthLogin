import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../Images/login.jpg";
import Cookies from "js-cookie";
import waterdroplets from "../Images/waterdrops.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleEmailBlur = () => {
    if (!isEmailValid(email)) {
      setEmailError("Invalid email format.");
    } else if (!email) {
      setEmailError("Email is Required");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least eight characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!isEmailValid(email)) {
      setEmailError("Invalid email format.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least eight characters.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Author": 'Bearer etkuysa'
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // localStorage.setItem("access_token", data.access_token);
        Cookies.set("access_token", data.access_token, {
          expires: 7,
          secure: true,
        });

        setSuccessMessage("Authentication successful");
        navigate("/dashboard");
      } else {
        setEmailError("");
        setPasswordError(
          "Authentication failed. Please check your email and password."
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex bg-slate-600  p-16">
      <div className="w-1/2 h-full relative">
        <img className=" h-full opacity-40" src={img} alt="login-img" />
        {/* <img
          src={waterdroplets}
          className=" h-full opacity-40"
          alt="waterdrops"
        /> */}
        <h1 className=" font-mono absolute  text-white text-xl  translate-x-10 translate-y-1/2 bottom-20 left-0 tracking-widest leading-10 font-extrabold">
          Every new friend is a new adventure.
          <br /> <span className=" text-sm">Let's get connected</span>
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-center justify-center max-h-full p-8 gap-5 rounded-lg shadow-lg bg-white text-black w-2/4 "
      >
        <div className="flex flex-col justify-center w-full">
          <label className="flex justify-start text-lg font-bold tracking-wide text-slate-600">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            className="border rounded-md text-black p-2 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
          {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
        </div>
        <div className="flex flex-col justify-center w-full">
          <label className="flex justify-start text-lg font-bold tracking-wide text-slate-600">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            className="border rounded-md text-black p-2 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
          />
          {passwordError && (
            <p className="text-red-500 mt-2">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className="border-slate-600 rounded-md mt-8 w-full h-10 bg-slate-600 font-bold tracking-wide text-white"
        >
          Login
        </button>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
