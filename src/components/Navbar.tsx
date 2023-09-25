import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-16 rounded-lg bg-slate-800 flex  pl-4 text-white list-none gap-8 items-center ">
      <li text-lg font-bold>
        <NavLink
          className={() =>
            `block py-2 pr-4 pl-3 duration-200 border-b  border-green-100 hover:bg-grey-50   hover:text-orange-700  
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="  text-lg font-bold ">
        <NavLink
          to="/login"
          className={() =>
            `block py-2 pr-4 pl-3 duration-200 border-b 
              border-green-100 hover:bg-grey-50  hover:text-orange-700  `
          }
        >
          Login
        </NavLink>
      </li>
      <li text-lg font-bold>
        <NavLink
          to="/dashboard"
          className={() =>
            `block py-2 pr-4 pl-3 duration-200 border-b  border-green-100 hover:bg-grey-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700  lg:p-0`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </div>
  );
};

export default Navbar;
