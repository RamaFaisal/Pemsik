// src/components/AddItem.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ setItems }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !category || !stock || !price) {
      setError("Harap isi semua informasi barang");
      return;
    }
    setError('');

    const newItem = {
      id: Date.now(),
      name,
      category,
      stock: parseInt(stock),
      price: parseFloat(price),
    };
    setItems(prevItems => [...prevItems, newItem]);

    navigate("/inventory");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tambah Barang Baru</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Barang"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stok"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default AddItem;
