import React, { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import RequireAuth from "./RequireAuth";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(()=> import("../pages/Login/Login"))
const Register = lazy(() => import("../pages/Register/Register"));
const Causes = lazy(() => import("../pages/Causes/Causes"));
const About = lazy(() => import("../pages/About/About"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AllRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const userData = localStorage.getItem('auth');
  if (userData) {
    const user = JSON.parse(userData);
    if(user.token){
      dispatch(login(user)) 
    }
  }
  
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
