import { Button, IconButton } from "@mui/material";
import {
  RemoveCircleOutline,
  AddCircleOutlineOutlined,
} from "@mui/icons-material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-4 shadow-lg border rounded-lg hover:shadow-violet-200 m-4">
      <div className="flex items-center">
        <div className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[9rem] shadow-lg hover:shadow-violet-200">
          <img
            className="w-full h-full object-cover origin-top rounded-lg "
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Mens Shoes</p>
          <p className="opacity-70 ">Size L,White</p>
          <p className="opacity-70 mt-2 ">Seller: Nike</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹169</p>
            <p className="opacity-50 line-through"> ₹200</p>
            <p className="text-green-600 font-semibold">%Off</p>
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center  lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "#4566df" }} aria-label="delete">
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "#4566df" }}>
            <AddCircleOutlineOutlined />
          </IconButton>
        </div>
        <div className="">
          <Button sx={{ color: "red" }}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
