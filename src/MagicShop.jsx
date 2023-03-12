import "./MagicShop.css";
import React, { useState } from "react";
import SearchResult from "./SearchResult";
import data from "./data.json";
import ShoppingCart from "./ShoppingCart";

function MagicShop() {
  const allProducts = data.allProducts; // save the j-son data in constant

  const [searchText, setSearchText] = useState(""); // create state for the input search word from the user in the search bar

  const [filteredProducts, setFilteredProducts] = useState([...allProducts]);

  const [shoppingCartProducts, setShoppingCartProducts] = useState(
    allProducts.map((p) => {
      return { productId: p.id, count: 0 };
    })
  );

  // create function
  const filterProductsBySearchWord = () => {
    if (searchText === "") {
      // if nothing is written in the search field, show everything.
      setFilteredProducts([...allProducts]); //
      return;
    }
    // serach in the name eller in the description
    const newFilteredProducts = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText)
    );
    setFilteredProducts(newFilteredProducts); // update the state
  };
  // create fiunction that take the id parameter to add product to the shopping cart
  const onAddToCart = (id) => {
    const newShoppingCartProducts = [...shoppingCartProducts];
    for (let i = 0; i < newShoppingCartProducts.length; ++i) {
      // loop in all the products
      if (newShoppingCartProducts[i].productId === id) {
        newShoppingCartProducts[i].count += 1;
        setShoppingCartProducts(newShoppingCartProducts); // update the state
        return;
      }
    }
  };

  const onRemoveFromCart = (id) => {
    const newShoppingCartProducts = [...shoppingCartProducts];
    for (let i = 0; i < newShoppingCartProducts.length; ++i) {
      if (newShoppingCartProducts[i].productId === id) {
        if (newShoppingCartProducts[i].count > 0) {
          newShoppingCartProducts[i].count -= 1;
          // newShoppingCartProducts[i].count = 0;  // if you want all to be removed

          setShoppingCartProducts(newShoppingCartProducts);
        }

        return;
      }
    }
  };

  // call the function filterProductsBySearchWord  in the click handle function
  const onSearchClick = () => {
    filterProductsBySearchWord();
  };

  return (
    <div>
      <strong> The Magic Store </strong>

      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={onSearchClick}> Search </button>
      </div>

      <div style={{ display: "grid", gridTemplate: "1fr / 1fr 1fr" }}>
        <SearchResult products={filteredProducts} onAddToCart={onAddToCart} />
        <ShoppingCart
          addedProducts={shoppingCartProducts}
          onRemove={onRemoveFromCart}
        />
      </div>
    </div>
  );
}

export default MagicShop;
