import React, { Suspense, lazy } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(()=> import("../pages/Login/Login"))
const Register = lazy(() => import("../pages/Register/Register"));
const Causes = lazy(() => import("../pages/Causes/Causes"));
const About = lazy(() => import("../pages/About/About"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AllRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/causes/:id" element={<Causes />} />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AllRoutes;
