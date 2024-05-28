import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="container mb-4">
      <h1 className="text-center">Products</h1>
      <div className="row">
        {data.map(function (item) {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <Card>
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
