import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";

/*
  ProductList Component
  - Displays plants grouped by categories
  - Allows users to add plants to the shopping cart
*/

const ProductList = () => {
  const dispatch = useDispatch();

  // Tracks which products have already been added to cart
  const [addedItems, setAddedItems] = useState({});

  // Plant data grouped by category
  const plantCategories = [
    {
      category: "Indoor Plants",
      plants: [
        { id: 1, name: "Snake Plant", price: 250, image: "/assets/snake.jpg" },
        { id: 2, name: "Peace Lily", price: 300, image: "/assets/lily.jpg" },
        { id: 3, name: "Aloe Vera", price: 200, image: "/assets/aloe.jpg" },
        { id: 4, name: "Spider Plant", price: 180, image: "/assets/spider.jpg" },
        { id: 5, name: "Areca Palm", price: 450, image: "/assets/areca.jpg" },
        { id: 6, name: "ZZ Plant", price: 400, image: "/assets/zz.jpg" },
      ],
    },
    {
      category: "Outdoor Plants",
      plants: [
        { id: 7, name: "Rose", price: 150, image: "/assets/rose.jpg" },
        { id: 8, name: "Hibiscus", price: 220, image: "/assets/hibiscus.jpg" },
        { id: 9, name: "Jasmine", price: 180, image: "/assets/jasmine.jpg" },
        { id: 10, name: "Bougainvillea", price: 300, image: "/assets/bougain.jpg" },
        { id: 11, name: "Tulsi", price: 100, image: "/assets/tulsi.jpg" },
        { id: 12, name: "Money Plant", price: 200, image: "/assets/money.jpg" },
      ],
    },
    {
      category: "Succulents",
      plants: [
        { id: 13, name: "Echeveria", price: 180, image: "/assets/eche.jpg" },
        { id: 14, name: "Haworthia", price: 160, image: "/assets/haw.jpg" },
        { id: 15, name: "Cactus", price: 140, image: "/assets/cactus.jpg" },
        { id: 16, name: "Jade Plant", price: 220, image: "/assets/jade.jpg" },
        { id: 17, name: "Lithops", price: 250, image: "/assets/lithops.jpg" },
        { id: 18, name: "Sedum", price: 170, image: "/assets/sedum.jpg" },
      ],
    },
  ];

  // Handles adding plant to cart and disables button
  const handleAddToCart = (plant) => {
    dispatch(addToCart({ ...plant, quantity: 1 }));
    setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div className="product-list">
      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Render plant categories */}
      {plantCategories.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                {/* Plant Thumbnail */}
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="120"
                  height="120"
                />

                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                {/* Add to Cart Button */}
                <button
                  disabled={addedItems[plant.id]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedItems[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
