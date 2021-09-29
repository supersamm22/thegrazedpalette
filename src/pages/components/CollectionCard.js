import Image from "next/image";

function CollectionCard() {
  return (
    <div className="">
      <div className="flex justify-items-center flex-col pt-12 ">
        <h1 className="max-w-5xl mx-auto text-center font-semibold text-lg md:text-1xl pb-4 border-b-2  border-solid border-amazon_blue mb-4  ">
          {" "}
          VIEW OUR SHOP{" "}
        </h1>
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-items-center items-center space-x-5 mt-5">
            <div>
              <Image
                src="http://pearlstudio.com.au/wp-content/uploads/IMG_0666-scaled.jpg"
                width={800}
                height={800}
                objectFit="cover"
                className="cursor-pointer"
              />
              <h2 className="text-center font-semibold text-sm md:text-lg pb-3 border-b-2 bg-amazon_blue shadow-md border-solid border-amazon_blue mb-4  transition duration-200 hover:bg-amazon_blue-light hover:shadow-md cursor-pointer  pt-2 ">
                {" "}
                SHOP GRAZING BOXES{" "}
              </h2>
            </div>
            <div>
              <Image
                src="http://pearlstudio.com.au/wp-content/uploads/IMG_0666-scaled.jpg"
                width={800}
                height={800}
                objectFit="cover"
                className="cursor-pointer"
              />
              <h2 className="text-center font-semibold text-sm md:text-lg pb-3 border-b-2 bg-amazon_blue shadow-md border-solid border-amazon_blue mb-4  transition duration-200 hover:bg-amazon_blue-light hover:shadow-md cursor-pointer  pt-2  ">
                {" "}
                SHOP DESSERT BOXES{" "}
              </h2>
            </div>
          </div>
          <div className="mt-2">
            <Image
              src="http://pearlstudio.com.au/wp-content/uploads/slider2.jpg"
              width={1536}
              height={600}
              objectFit="cover"
              className="cursor-pointer"
            />
            <h2 className="text-center font-semibold text-sm md:text-lg pb-3 border-b-2 bg-amazon_blue shadow-md border-solid border-amazon_blue mb-4  transition duration-200 hover:bg-amazon_blue-light hover:shadow-md cursor-pointer  pt-2 ">
              {" "}
              SHOP TABLE SETUPS{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
