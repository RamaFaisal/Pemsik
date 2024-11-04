import React, { useState } from "react";
import { Link } from "react-router-dom";

const InventoryList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Daftar Barang</h2>

      <input
        type="text"
        placeholder="Cari barang berdasarkan nama atau kategori..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 mb-4 w-[340px]"
      />
      <table className="border-2 min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nama Barang</th>
            <th className="px-4 py-2">Kategori</th>
            <th className="px-4 py-2">Stok</th>
            <th className="px-4 py-2">Harga</th>
            <th className="px-4 py-2">Detail</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr key={item.id} className="bg-gray-300">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">
                  <Link to={`/item/${item.id}`}>Lihat Detail</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Tidak ada barang yang cocok dengan pencarian
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
