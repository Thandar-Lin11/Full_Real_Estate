import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({ card }) => {
  return (
    <div className="flexColStart r-card" onClick={() => Navigate()}>
      <img src={card.image} alt="home" />
      <AiFillHeart size={24} color="orange" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
    </div>
  );
};

export default PropertyCard;
