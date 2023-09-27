import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ProfileData {
  name: string;
  email: string;
}

function Profile() {
  const [data, setData] = useState<ProfileData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const token = Cookies.get("access_token");
    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((profileData: ProfileData) => {
        console.log(profileData);
        setData(profileData);
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, []);

  return (
    <div className="">
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className=" bg-slate-700 h-screen flex justify-center items-center text-white">
          {data ? (
            <pre className="  ">{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
