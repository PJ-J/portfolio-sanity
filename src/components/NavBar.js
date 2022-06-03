import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

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
            Home
          </NavLink>
          <NavLink
            to="/person"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl"
                : "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl opacity-60 hover:text-white hover:opacity-100"
            }
          >
            Blog Posts
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
            to="/about"
            className={({ isActive }) =>
            isActive
                ? "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl"
                : "inline-flex items-center py-3 px-3 my-2 rounded text-white text-xl opacity-60 hover:text-white hover:opacity-100"
            }
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-2">
          <SocialIcon
            url="https://github.com/PJ-J"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/pj-jones-686249156/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
