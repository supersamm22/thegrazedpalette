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
      <div className="flex items-center justify-between  ">
        <div className="pl-4">
          <MenuIcon
            className="h-6 cursor-pointer md:text-white"
            onClick={showSidebar}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="http://pearlstudio.com.au/wp-content/uploads/logo.webp"
            width={100}
            height={60}
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
      <div className="flex justify-center ">
        <div className="hidden md:flex space-x-3 justify-center max-w-screen-2xl ">
          <a
            href="/"
            className=" block py-2.5 px-4 text-sm rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            HOME
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 text-sm rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            SHOP
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 text-sm rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            CATERING
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 text-sm rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            CONTACT
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 text-sm rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            ABOUT
          </a>
          <a
            href="/"
            className=" block py-2.5 px-4 text-sm rounded transition duration-200 hover:bg-amazon_blue hover:shadow-md font-normal"
          >
            MY ACCOUNT
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
