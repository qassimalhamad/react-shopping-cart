import { useState } from "react";
import "./Shop.css";

//Data
import { inventoryData } from "../../data/data";

//Components
import InventoryList from "../../components/InventoryList/InventoryList";

const Shop = () => {
  // States
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);

  //Handlers
  const handleAddItem = () => {
    setShopInventory([]);
  };
  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        {/* shop */}
        <InventoryList title="Shop List" inventory={shopInventory} />
        {/* cart */}
        <InventoryList title="User List" inventory={userInventory} />
      </section>
    </main>
  );
};

export default Shop;
