import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <button className="btn">ADD TO CART</button>
    </div>
  </div>
);
export default CollectionItem;
