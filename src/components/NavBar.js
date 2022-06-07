import React from "react";
import { NavLink } from "react-router-dom";
import github from "../assets/images/github-brands.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-2 px-3 m-2 text-white hover:text-white text-3xl font-bold cursive tracking-widest"
                : "inline-flex items-center py-2 px-3 m-2 text-gray-200 hover:text-white text-3xl font-bold cursive tracking-widest"
            }
          >
            PJ
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl"
                : "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl opacity-60 hover:text-white hover:opacity-100"
            }
          >
            About This Site
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl"
                : "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl opacity-60 hover:text-white hover:opacity-100"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/person"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl"
                : "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl opacity-60 hover:text-white hover:opacity-100"
            }
          >
            People at Alloy
          </NavLink>
          <a href="https://github.com/PJ-J" target="_blank" rel="noreferrer">
            <img
              className="github"
              src={github}
              alt="github"
            />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
