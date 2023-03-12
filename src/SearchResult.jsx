import SearchProduct from "./SearchProduct";

function SearchResult(props) {
  console.log("SearchResult props", props);

  return (
    <div>
      <h2> Search Result</h2>
      <div>
        {props.products.length === 0 && (
          <h3>No products matching the search...</h3>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {props.products.map((product) => (
          <SearchProduct
            // key={product.id}
            product={product}
            onAddToCart={() => props.onAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
