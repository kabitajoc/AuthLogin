import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const isAuthenticated = !!Cookies.get("access_token");

  const handleLogout = () => {
    // localStorage.removeItem("access_token");
    Cookies.remove("access_token");
    navigate("/login");
  };

  return (
    <div className="w-full h-16 rounded-lg bg-slate-600 flex pl-4 text-white list-none gap-8 items-center">
      <li className="text-lg font-bold">
        <NavLink
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-slate-800 border border-b" : "text-white"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive
                ? "text-slate-800 border outline-none border-b-blue-100"
                : "text-white"
            }`
          }
        >
          Login
        </NavLink>
      </li>

      {/* Conditional rendering for Dashboard and Profile links */}
      {isAuthenticated && (
        <>
          <li className="text-lg font-bold">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-slate-800 border outline-none border-b-blue-100"
                    : "text-white"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="text-lg font-bold">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-slate-800 border outline-none border-b-blue-100"
                    : "text-white"
                }`
              }
            >
              Profile
            </NavLink>
          </li>

          <button
            className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
