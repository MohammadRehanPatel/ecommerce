import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { StarBorder } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className=" px-5 lg:px-20">
      <div className="">
        <h1 className="font-bold  text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl shadow-violet-100 rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://uniworthdress.com/uploads/product/TSS2317..jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Title</p>
                  <p className="opacity-50 space-x-5 text-xs font-semibold">
                    <span>Color : Brown</span>
                    <span>Size : XL</span>{" "}
                  </p>
                  <p>Seller: NiKe</p>
                  <p className="font-semibold">₹1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorder
                  sx={{ fontSize: "3rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
