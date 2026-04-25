import React from "react";
import Button from "./Button";

const Navbar = () => {
  const navLinks = ["Business", "Treasury", "Developers", "Join us"];
  return (
    <nav className="flex items-center justify-between px-8 py-4 text-accent-main ">
      <div>
        <h4 className="text-3xl font-medium cursor-pointer flex items-center">
          <span className="inline-block mr-2 rotate-8 text-4xl">
            <i className="ri-shining-2-fill text-shadow-[3px_2px_0px_#00000026]"></i>
          </span>
          BloomFi
        </h4>
      </div>
      <div className="text-sm flex items-center gap-8 font-medium capitalize  ">
        {navLinks.map((link) => (
          <a
            href="#"
            key={link}
            className="hover:underline hover:underline-offset-3 cursor-pointer duration-300 ease-in"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-8">
        <span>
          <i className="ri-search-line text-2xl cursor-pointer"></i>
        </span>
        <Button>Launch BETA</Button>
      </div>
    </nav>
  );
};

export default Navbar;
