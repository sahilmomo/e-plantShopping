import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Welcome to Paradise Nursery – your one-stop shop for houseplants.</p>

          {/* REQUIRED FIX */}
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
