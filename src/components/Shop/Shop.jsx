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
  const handleAddItem = (selectedItem) => {
    // filter item out of the inventory
    const newShopInventory = shopInventory.filter(
      (item) => item._id !== selectedItem._id
    );
    setShopInventory(newShopInventory);
    setUserInventory([...userInventory, selectedItem]);

    // add the incoming item to the user list
  };

  const handleRemoveItem = (selectedItem) => {
    // filter item out of the inventory
    const newUserInventory = userInventory.filter(
      (item) => item._id !== selectedItem._id
    );
    setUserInventory(newUserInventory);
    setShopInventory([...shopInventory, selectedItem]);
  };
  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        {/* shop */}
        <InventoryList
          title="Shop List"
          inventory={shopInventory}
          handleItemClick={handleAddItem}
        />
        {/* cart */}
        <InventoryList
          title="User List"
          inventory={userInventory}
          handleItemClick={handleRemoveItem}
        />
      </section>
    </main>
  );
};

export default Shop;
