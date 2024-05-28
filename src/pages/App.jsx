import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  );
}
