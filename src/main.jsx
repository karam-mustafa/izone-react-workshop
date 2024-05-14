import React from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "./pages/AboutUsPage.jsx";
import App from "./pages/App.jsx";
import HomePage from "./pages/HomePage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App>
    <HomePage />
  </App>
);
