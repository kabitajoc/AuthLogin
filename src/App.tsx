import "./App.css";
import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className="flex flex-col gap-10 bg-slate-500 h-screen rounded-lg">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
