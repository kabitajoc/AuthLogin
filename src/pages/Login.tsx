import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errmsg, setErrMsg] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        console.log(data);
        localStorage.setItem("access_token", data.access_token);

        setErrMsg("");
        setSuccessMessage("Authentication successful");

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
