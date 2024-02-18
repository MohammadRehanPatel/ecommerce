import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((items) => (
    <img
      role="presentation"
      className="cursor-pointer -z-10"
      // onClick={() => nav}
      src={items.image}
      alt=""
    />
  ));
  return (
    <div className="-z-10">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>
  );
};
export default MainCarousel;
