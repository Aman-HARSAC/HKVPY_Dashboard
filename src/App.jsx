import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import ToastContainer from "./components/ToastContainer";

const PublicRoutes = lazy(() => import("./routes/Public"));
const PrivateRoutes = lazy(() => import("./routes/Private"));

function App() {
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  const routes = useRoutes([
    {
      path: "/*",
      element: isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />,
    },
  ]);

  return (
    <Suspense fallback={null}>
      {routes}
      <ToastContainer />
    </Suspense>
  );
}

export default App;
