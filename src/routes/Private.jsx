import { useRoutes, Navigate, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Dashboard from "../pages/dashboard/Dashboard";
import SurveyedTrees from "../pages/dashboard/SurveyedTrees";

const PrivateLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default function PrivateRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <PrivateLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "previously-surveyed-trees",
          element: <SurveyedTrees />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/dashboard" replace />,
    },
  ]);
}