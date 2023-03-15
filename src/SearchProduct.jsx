import Modal from "./Modal.js";
import { React, useState } from "react";
import StarVoting from "./Vote.jsx";
import "./SearchProduct.css";

function SearchProduct(props) {
  const [show, setShow] = useState(false); // the insital state for the modal is false -un show
  console.log("SearchProduct props: ", props);
  return (
    <div className="containerr">
      <div className="img">
        <img
          width={"80px"}
          height={"80px"}
          src={props.product.image}
          alt="product_image"
        />
      </div>
      <div className="info">
        <h3>{props.product.name}</h3>
        <div className="container text-center">
          <button className="btn-primary" onClick={() => setShow(true)}>
            More Information
          </button>
          <Modal show={show} onClose={() => setShow(false)}>
            <h3>{props.product.description} </h3>
          </Modal>
        </div>
        <div className="star">
          <StarVoting />
        </div>
      </div>

      <div className="price">
        <span className="right">
          <h3>{props.product.price} SEK</h3>

          <button onClick={props.onAddToCart}>Add to cart</button>
        </span>
      </div>
    </div>
  );
}
export default SearchProduct;
