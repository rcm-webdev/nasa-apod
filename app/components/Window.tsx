import Image from "next/image";
import React from "react";

const Window = () => {
  return (
    <div className="relative h-[500px] w-[350px] md:w-[700px]">
      <div className="mockup-window bg-base-900 border ">
        <div className="bg-base-200 text-base-100 text-center relative py-56">
          <Image
            src=""
            alt="Astro View Hero Image"
            fill={true}
            className="object-cover skeleton"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Window;
