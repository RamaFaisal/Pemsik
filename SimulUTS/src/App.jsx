import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import ItemDetail from "./components/ItemDetail";
import AddItem from "./components/AddItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", category: "Category 1", stock: 10, price: 100 },
  ]);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<InventoryList items={items} />} />
              <Route
                path="/inventory"
                element={<InventoryList items={items} />}
              />
              <Route path="/item/:id" element={<ItemDetail items={items} />} />
              <Route
                path="/add-item"
                element={<AddItem setItems={setItems} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
