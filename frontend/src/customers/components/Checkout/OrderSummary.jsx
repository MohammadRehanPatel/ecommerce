import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button, Divider } from "@mui/material";
import Cart from "../Cart/Cart";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard />
      </div>
      <Cart />
    </div>
  );
};

export default OrderSummary;
