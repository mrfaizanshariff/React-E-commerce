import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection";
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = SHOP_DATA;
  }

  render() {
    return (
      <div>
        {this.state.map(({ id, ...otherElements }) => (
          <PreviewCollection key={id} {...otherElements} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
