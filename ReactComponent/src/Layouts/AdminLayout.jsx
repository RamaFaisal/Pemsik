const AdminLayout = () => {

}

const Sider = () => {
  return (
    <aside class="w-64 bg-indigo-900 p-4">
      <h1 class="text-white text-2xl font-bold">Admin Panel</h1>
      <nav>
        <ul class="text-white p-4">
          <li class="p-2 hover:bg-white hover:text-black">
            <a href="">Dashboard</a>
          </li>
          <li
            id="dropdownToogle"
            class="flex flex-row p-2 justify-between hover:bg-white hover:text-black"
          >
            <a href="">Mahasiswa</a>
          </li>
          <li class="p-2 hover:bg-white hover:text-black">
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

const Header = () => {

}

export default AdminLayout;