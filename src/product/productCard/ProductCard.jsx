import React, { Component } from 'react'
import { Link } from "react-router-dom";


function ProductCard({ id, title, price, rating, image }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <p className="card-text">⭐ {rating}</p>
        <Link to={`/product/${id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

