import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

export default function Slider() {
  const data = [
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
  return (
    <Carousel>
      {data.map((item) => {
        return (
          <Carousel.Item>
            <ExampleCarouselImage url={item.img} text="First slide" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
