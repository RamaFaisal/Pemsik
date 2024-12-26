import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register"
import ProtectedRoute from "./Components/Protected";
import AdminLayout from "./Layouts/AdminLayout";

const RouteList = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    // children: [
    //   {
    //     index: true,
    //     element: <Dashboard />
    //   },
    //   {
    //     path: 'mahasiswa',
    //     element: <Mahasiswa />
    //   }
    // ]
  },
]);

export default RouteList;