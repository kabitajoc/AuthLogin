import "./App.css";
import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div className="flex flex-col  bg-slate-500  rounded-lg">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
