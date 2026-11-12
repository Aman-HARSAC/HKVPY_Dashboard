import { useRoutes, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";

const PublicLayout=()=> {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

export default function PublicRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { path: "", element: <Login /> },
        // future
        // { path: "forgot-password", element: <ForgotPassword /> }
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
