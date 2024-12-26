import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const hanldeLogout = () => {
    localStorage.removeItem("authToken");
    Swal.fire({
      icon: 'success',
      title: 'Logout Berhasil',
    });
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-indigo-900 text-white p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav>
          <ul>
            <li className="hover:bg-white hover:text-black p-2 rounded">
              <a href="#">Dashboard</a>
            </li>
            <li className="hover:bg-white hover:text-black p-2 rounded">
              <a href="#">Mahasiswa</a>
            </li>
            <li className="hover:bg-white hover:text-black p-2 rounded">
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 text-right">
          <button className="bg-blue-500 p-2 rounded-md text-white">
            Log out
          </button>
        </header>
        <main className="flex-grow p-6 bg-blue-50">{children}</main>
        <footer className="bg-indigo-900 p-4 text-white text-center">
          &copy; Admin Panel
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
