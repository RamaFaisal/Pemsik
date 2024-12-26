import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://demo-api.syaifur.io/api/register",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.code === 201) {
        Swal.fire({
          icon: "success",
          title: "Pendaftaran Berhasil",
          text: response.data.message,
        });

        setForm({ name: "", email: "", password: "" });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Pendaftaran Gagal",
        text: error.response?.data?.message || "Silahkan Coba Lagi",
      });
    }
  };

  return (
    <div className="register-container">
      <h1>Halaman Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default Register;
