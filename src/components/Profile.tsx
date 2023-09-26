import React, { useEffect, useState } from "react";
import Login from "../pages/Login";
function Profile() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/auth/profile",
    {
      method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Author": 'Bearer ,localStorage.getItem("access_token")'
          }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
       
        setError(error);
      });
  }, []); 

  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
