import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
  return (
    <div>
      <aside className="w-64 h-screen bg-indigo-900 p-4">
        <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
        <nav>
          <ul className="text-white p-4">
            <li className="p-2 hover:bg-white hover:text-black">
              <Link to='/'>Dashboard</Link>
            </li>
            <li
              id="dropdownToogle"
              className="flex flex-row p-2 justify-between hover:bg-white hover:text-black"
            >
              <Link to="/inventory">Inventory List</Link>
            </li>
            <li className="p-2 hover:bg-white hover:text-black">
              <Link to="/add-item">Add Item</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar