import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex bg-white justify-end py-2 px-3 w-full border-2 rounded-lg border-gray-300 gap-4 mb-4 md:px-6">
      <a href="/" className="text-center bg-inherit p-2 decoration-0">
        Contact us
      </a>
      <Button text="Signup" />
    </nav>
  );
};

export default NavBar;
