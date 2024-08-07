import { useState } from "react";
import "./InventoryList.css";

const InventoryList = (props) => {
  function deriveButtonText() {
    if (props.title.toLowerCase().includes("shop")) {
      return "Add Item";
    } else {
      return "Remove Item";
    }
  }
  return (
    <div className="inventory-list">
      <h2>{props.title}</h2>
      <ul>
        {props.inventory.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => props.handleItemClick(item)}>
              {deriveButtonText()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
