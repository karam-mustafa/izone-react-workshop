import "./../../public/my_css.css";
import Footer from "../components/Footer";
import Navbar from "../components/NavbarComponent";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import Products from "../components/Products";

const dFlex = {
  display: "flex",
};

const cardsData = [
  {
    img: "https://i.ytimg.com/vi/eQ6P95h1R4U/maxresdefault.jpg",
    title: "Service 1",
    description: "Our first product in the center",
  },
  {
    img: "https://i.ytimg.com/vi/eQ6P95h1R4U/maxresdefault.jpg",
    title: "Service 2",
    description: "Our first product in the center",
  },
  {
    img: "https://i.ytimg.com/vi/eQ6P95h1R4U/maxresdefault.jpg",
    title: "Service 3",
    description: "Our first product in the center",
  },
];

export default function HomePage() {
  return (
    <div>
      <Slider />

      <AboutUs />

      <Cards cards={cardsData} />
      <Products data={cardsData} />
    </div>
  );
}
