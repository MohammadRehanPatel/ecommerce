import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button, Divider } from "@mui/material";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);
  console.log(order);

  const handleCheckOut = () => {
    dispatch(createPayment(orderId));
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <Cart />

      <div>
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider />
              <div className="space-y-3 p-2 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order?.discount}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCheckOut}
                className="w-full"
                variant="contained"
                sx={{
                  px: "2.5rem",
                  py: "0.7rem",
                  bgcolor: "#9155fdee",
                  mt: "1rem",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default OrderSummary;
