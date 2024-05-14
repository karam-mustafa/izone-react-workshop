import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

export default function App({ children }) {
  return (
    <div>
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
}
