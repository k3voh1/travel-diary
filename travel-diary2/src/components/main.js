import React from "react";
import Card from "./card";
import TravelData from "./traveldata";

const Main = () => {
  const TravelListing = TravelData.map((listing) => {
    return <Card {...listing} />;

    const toggle = (id) => {
      setSquares((prevSquares) => {
        const newSquares = [];
        prevSquares.map((boxes) => {
          if (boxes.id === id) {
            newSquares.push({ ...boxes, on: !boxes.on });
          } else {
            newSquares.push(boxes);
          }
        });
        return newSquares;
      });
    };
  });
  return <section className="main-cont">{TravelListing}</section>;
};

export default Main;
