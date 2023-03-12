import SearchProduct from "./SearchProduct";
import "./SearchResult.css";

function SearchResult(props) {
  console.log("SearchResult props", props);

  return (
    <div className="main">
      <h2> Search Result</h2>
      <div>
        {props.products.length === 0 && (
          <h3>No products matching the search...</h3>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
