<div className="bg-amazon_blue w-64 md:hidden">
  <XIcon className="h-10 pt-5" />
  <Image
    src="http://pearlstudio.com.au/wp-content/uploads/logo.webp"
    width={100}
    height={80}
    objectFit="contain"
  />
  <nav className=" bg-amazon_blue-light w-64 h-screen flex justify-start flex-col top-0 ">
    {SidebarData.map((item, index) => {
      return (
        <div>
          <a
            key={index}
            className=" block py-2.5 px-4 rounded transition duration-200 hover:bg-amazon_blue  font-normal"
          >
            {item.title}
          </a>
        </div>
      );
    })}
  </nav>
</div>;
