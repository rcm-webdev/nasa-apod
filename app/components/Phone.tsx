import Image from "next/image";
import React from "react";

const Phone = () => {
  return (
    <div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="carousel carousel-vertical rounded-box h-96">
            <div className="carousel-item h-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                alt="Astro View Hero Image"
                height={500}
                width={500}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                alt="Astro View Hero Image"
                height={500}
                width={500}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                alt="Astro View Hero Image"
                height={500}
                width={500}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                alt="Astro View Hero Image"
                height={500}
                width={500}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                alt="Astro View Hero Image"
                height={500}
                width={500}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                alt="Astro View Hero Image"
                height={500}
                width={500}
              />
            </div>
            <div className="carousel-item h-full">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                alt="Astro View Hero Image"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
