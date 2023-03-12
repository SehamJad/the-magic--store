import Modal from "./Modal.js";
import { React, useState } from "react";

function SearchProduct(props) {
  const [show, setShow] = useState(false);
  console.log("SearchProduct props: ", props);
  return (
    <div style={{ border: "1px solid white", margin: "1em" }}>
      <img
        width={"100px"}
        height={"100px"}
        src={props.product.image}
        alt="product_image"
      />
      <h3>
        {props.product.name} ({props.product.id})
      </h3>
      <div className="container text-center">
        <button className="btn-primary" onClick={() => setShow(true)}>
          More Information
        </button>
        <Modal show={show} onClose={() => setShow(false)}>
          <h3>{props.product.description} </h3>
        </Modal>
      </div>
      <h3>{props.product.price} SEK</h3>

      <button onClick={props.onAddToCart}>Add to cart</button>
    </div>
  );
}
export default SearchProduct;
