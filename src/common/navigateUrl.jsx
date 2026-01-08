import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../component/login/login";
import { useEffect } from "react";
import Dashboard from "../component/dashboardPage/dashboard";
import ContractEmployee from "../component/contract/ContractEmployee";


function AppRoutes() {

  const location = useLocation();
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user"));

  // Redirect to /login if user is not logged in and not on login page
  // useEffect(() => {
  //   const publicPaths = ["/", "/login"];
  //   if (!user && !publicPaths.includes(location.pathname)) {
  //     navigate("/login");
  //   }
  // }, [user, location.pathname, navigate]);

  const hideHeader = ["/", "/login"].includes(location.pathname);
  return (
    <>
      {!hideHeader}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/contract" element={<ContractEmployee />} />
      </Routes>

    </>
  );

}
export default AppRoutes;