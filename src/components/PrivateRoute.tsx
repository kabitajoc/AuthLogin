import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  
  const token = localStorage.getItem("access_token");

  useEffect(()=> {
  if (!token ) {
    
   return navigate("/login");
   
  }
  },[token])


  
  return children;
};

export default PrivateRoute;
