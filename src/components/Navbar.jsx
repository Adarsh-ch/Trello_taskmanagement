// Navbar.jsx
import React from "react";

const Navbar = ({ changeState }) => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-3 shadow-md">
      <h1 className="font-bold text-2xl">Task Manager</h1>
      <button
        className="border px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
        onClick={changeState}
      >
        Switch Board
      </button>
    </nav>
  );
};

export default Navbar;
