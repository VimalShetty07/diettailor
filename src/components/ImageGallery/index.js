import Img from "../Img";
import React from "react";

export default function ImageGallery({
  thumbsUpImage = "img_thumbs_up_blue_a700.svg",
  logoImage = "img_logo.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center md:w-full gap-2.5 py-1.5`}
    >
      <Img
        src={thumbsUpImage}
        width={28}
        height={34}
        alt="Thumbs Up Image"
        className="h-[34px]"
      />
      <Img
        src={logoImage}
        width={102}
        height={24}
        alt="Logo Image"
        className="h-[24px] w-[76%] self-end object-contain"
      />
    </div>
  );
}