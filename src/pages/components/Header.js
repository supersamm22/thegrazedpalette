import Image from "next/image";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header className="sticky">
      <div className=" flex justify-center pt-1 pb-1 bg-amazon_blue-light shadow-sm">
        <h3 className="text-sm">Fixed shipping charges</h3>
      </div>
      <div className="flex items-center justify-between pt-5 ">
        <div className="pl-4">
          <MenuIcon
            className="h-6 cursor-pointer md:text-white"
            onClick={showSidebar}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="http://pearlstudio.com.au/wp-content/uploads/logo.webp"
            width={150}
            height={80}
          />
        </div>
        <div className="pr-4 relative">
          <span className="absolute right-9 bottom-4 bg-amazon_blue h-6 w-6 text-center font-semibold rounded-full">
            0
          </span>
          <ShoppingCartIcon className="h-6" />
        </div>
      </div>
      {/* Menu Option */}
      <div className="flex justify-center pt-5 ">
        <div className="hidden md:flex space-x-3 justify-center max-w-screen-2xl ">
          <a
            href="/"
            className=" block py-2.5 px-4 rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            Home
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            Shop
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            Catering
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            Contact
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            About
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            My Account
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
