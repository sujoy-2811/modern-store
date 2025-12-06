import React from "react";
import logo from "../.././/assets/images/store.png";

const Header = () => {
  return (
    <header>
      <div className="max-h-32 flex items-center justify-between px-4 border-2 border-white">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Modern Store Logo"
              className="h-10 w-auto object-contain"
            />

            <h2 className="font-semibold text-xl">Modern Store</h2>
          </a>
        </div>

        {/* Nav item */}
        <div>
          <ul></ul>
        </div>

        {/* profile */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
