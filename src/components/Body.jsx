import React from "react";
import banner from "../img/banner.png";
import banner_horizontal from "../img/Banner_Horizontal.png";

export const Body = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} />
        <img src={banner_horizontal} className="banner_horizontal" alt="" />
      </div>
    </>
  );
};
