import Image from "next/image";
import React from "react";

const Window = () => {
  return (
    <div className="relative h-[500px] w-[350px] md:w-[700px]">
      <div className="mockup-window bg-base-900 border ">
        <div className="bg-base-200 relative py-56">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Astro View Hero Image"
            fill={true}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Window;
