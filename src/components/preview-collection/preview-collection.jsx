import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item";

const PreviewCollection = ({ title, routeName, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()} </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherDetails }) => (
          <CollectionItem key={id} {...otherDetails} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
