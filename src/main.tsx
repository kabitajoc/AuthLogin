import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import Profile from "./components/Profile.tsx";
import Logout from "./components/Logout.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children : [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      {/* <Route
        path="logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      /> */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
