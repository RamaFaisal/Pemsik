import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) return <p>Barang Tidak Ditemukan.</p>

  return (
    <div>
      <h2 className="text-xl font-bold">Detail Barang</h2>
      <p>Nama: {item.name}</p>
      <p>Kategori: {item.category}</p>
      <p>Stok: {item.stock}</p>
      <p>Harga: {item.price}</p>
    </div>
  );
}

export default ItemDetail;  