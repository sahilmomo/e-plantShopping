import React, { useState } from "react";

function ProductList() {
  const plants = {
    Indoor: [
      { id: 1, name: "Snake Plant", price: 200 },
      { id: 2, name: "Peace Lily", price: 250 },
      { id: 3, name: "Spider Plant", price: 180 },
      { id: 4, name: "Aloe Vera", price: 150 },
      { id: 5, name: "Money Plant", price: 120 },
      { id: 6, name: "Rubber Plant", price: 300 }
    ],
    Outdoor: [
      { id: 7, name: "Rose", price: 100 },
      { id: 8, name: "Jasmine", price: 90 },
      { id: 9, name: "Hibiscus", price: 110 },
      { id: 10, name: "Tulsi", price: 80 },
      { id: 11, name: "Sunflower", price: 70 },
      { id: 12, name: "Bougainvillea", price: 130 }
    ],
    Succulents: [
      { id: 13, name: "Echeveria", price: 160 },
      { id: 14, name: "Haworthia", price: 170 },
      { id: 15, name: "Cactus", price: 140 },
      { id: 16, name: "Sedum", price: 150 },
      { id: 17, name: "Crassula", price: 190 },
      { id: 18, name: "Aloe Juvenna", price: 200 }
    ]
  };

  const [added, setAdded] = useState({});

  const handleAdd = (id) => {
    setAdded({ ...added, [id]: true });
  };

  return (
    <div>
      <h2>Plant Listing</h2>

      <nav>
        <a href="/">Home</a> | <a href="/plants">Plants</a> | <a href="/cart">Cart</a>
      </nav>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {plants[category].map(plant => (
            <div key={plant.id}>
              <p>{plant.name} - ₹{plant.price}</p>
              <button
                disabled={added[plant.id]}
                onClick={() => handleAdd(plant.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
