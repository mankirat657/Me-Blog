import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  
  return (
    <Navbar className="border-b-2 bg-zinc-100 p-3 text-black">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Mesh's</span>Blog
      </Link>

      <form className="relative w-full lg:w-64 hidden lg:block">
        <TextInput
          type="text"
          placeholder="Search..."
          className="pl-10 outline-none w-full"
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden flex items-center justify-center rounded-full border border-zinc-400" color="gray">
        <AiOutlineSearch />
      </Button>

      <div className="flex items-center gap-3 md:order-2">
        <Button className="w-10 h-10 hidden sm:flex items-center justify-center border border-zinc-400" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" className="w-fit h-fit px-2">
            <h1 className="font-semibold">Sign In</h1>
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

     

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/" className="text-sm sm:text-base">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to="/about" className="text-sm sm:text-base">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to="/projects" className="text-sm sm:text-base">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
