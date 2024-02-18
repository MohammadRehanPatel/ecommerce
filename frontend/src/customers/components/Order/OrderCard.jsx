import { Grid } from "@mui/material";
import React from "react";
import { Adjust } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="mt-4 p-5 shadow-lg shadow-violet-100 rounded-lg hover:shadow-2xl hover:shadow-violet-200 border "
    >
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://uniworthdress.com/uploads/product/TSS2317..jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Title</p>
              <p className="opacity-50 text-xs font-semibold">Size: XL</p>
              <p className="opacity-50 text-xs font-semibold">Color: Brown</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div className="">
              <p>
                <Adjust
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
