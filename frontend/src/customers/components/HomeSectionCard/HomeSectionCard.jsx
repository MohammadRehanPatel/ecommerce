import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="relative space-y-2  flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 m-2 transition-all cursor-pointer hover:shadow-lg ">
      <div className=" relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border hover:shadow-lg rounded-xl h-80">
        <img
          className="object-cover object-left-top w-full h-full  shadow-lg transition-all duration-500 hover:scale-110"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
