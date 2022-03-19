import React, { Suspense, lazy } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Causes from "../pages/Causes/Causes";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import RequireAuth from "./RequireAuth";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));

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
