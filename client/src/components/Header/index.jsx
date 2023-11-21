import React from "react";
import "../../App.css";

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="flex justify-between flex-row flex-wrap">
        <h1 className="mx-3">Business Name</h1>
        <h1 className="mx-3">Navbar</h1>
      </div>
    </header>
  );
}

export default Header;
