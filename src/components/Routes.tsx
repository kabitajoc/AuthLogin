import { Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Routes = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/login" element={Login} />
        {/* <Route path="/Dashboard" element={Dashboard} /> */}
      </Routes>
    </div>
  );
};

export default Routes;
