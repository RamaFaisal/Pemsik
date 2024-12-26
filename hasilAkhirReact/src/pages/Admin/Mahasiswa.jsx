import React from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useState } from "react";

const Mahasiswa = () => {
  // State untuk form data
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");

  // State untuk menyimpan data yang sudah disubmit
  const [data, setData] = useState([]);

  // Fungsi untuk menangani perubahan input
  const handleNimChange = (e) => setNim(e.target.value);
  const handleNamaChange = (e) => setNama(e.target.value);

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { nim, nama };
    setData([...data, newData]);

    // Reset form setelah submit
    setNim("");
    setNama("");
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Data Mahasiswa</h1>

      {/* Form untuk menambahkan data mahasiswa */}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label className="text-md font-medium text-gray-700">Nim : </label>
          <input
            type="text"
            value={nim}
            onChange={handleNimChange}
            placeholder="Masukkan Nim Lurd"
            className="mt-3 w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div>
          <label className="text-md font-medium text-gray-700">Nama : </label>
          <input
            type="text"
            value={nama}
            onChange={handleNamaChange}
            placeholder="Masukkan Nama Lurd"
            className="mt-3 w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <Button text="Tambah Mahasiswa" style="mt-2.5 bg-green-500 hover:bg-green-700" />
      </form>
      <br />
      <h2>Data Mahasiswa yang terdaftar:</h2>
      {/* Menampilkan Data Mahasiswa */}
      <Table data={data} />
    </div>
  );
};

export default Mahasiswa;
