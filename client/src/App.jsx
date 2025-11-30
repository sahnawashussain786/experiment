import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ClassDetails from "./pages/ClassDetails";
import ScrollToTop from "./components/ScrollToTop";
import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import AuthSync from "./components/AuthSync";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthSync />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment/:plan" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />
          <Route path="/classes/:id" element={<ClassDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
