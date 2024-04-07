"use client";

import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Example: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-4 items-center">
      <section className="max-w-xl mx-auto mt-4">
        <h1 className="font-extrabold text-center text-4xl lg:text-6xl tracking-tight mb-6">
          Astronomy at Your{" "}
          <span className="relative mt-5 inline-block px-3 py-0.5 font-bold text-white bg-accent rounded-md transform rotate-[2deg]">
            <div className="absolute inset-0 "></div>
            <span className="relative inline-block transform -rotate-[2deg] ">
              Fingerprints
            </span>
          </span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Gain access to NASA&apos;s Astronomy Picture of the Day (APOD) by
          date.
        </p>
      </section>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        placeholderText="Select Date"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            className="text-3xl text-accent"
          >
            <path
              fill="currentColor"
              d="M14.5 3a2.5 2.5 0 0 1 2.495 2.336L17 5.5v9a2.5 2.5 0 0 1-2.336 2.495L14.5 17h-9a2.5 2.5 0 0 1-2.495-2.336L3 14.5v-9a2.5 2.5 0 0 1 2.336-2.495L5.5 3zM16 7H4v7.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16h9a1.5 1.5 0 0 0 1.493-1.355L16 14.5zm-4.484 1.234q.8 0 1.27.426q.469.426.469 1.152q0 .419-.215.745a1.5 1.5 0 0 1-.586.513q.445.207.685.567t.24.812q0 .75-.507 1.19q-.509.44-1.352.44q-.847 0-1.357-.442t-.51-1.188q0-.457.242-.82t.68-.559a1.5 1.5 0 0 1-.58-.513a1.33 1.33 0 0 1-.213-.745q0-.726.469-1.152t1.265-.426m-3.02.059V14h-.945V9.434l-1.395.476v-.8l2.219-.817zm3.016 3.168q-.413 0-.662.258q-.248.258-.248.683q0 .419.245.668q.244.25.673.25t.67-.242t.24-.676q0-.42-.252-.681q-.252-.26-.666-.26m.004-2.465q-.363 0-.574.229q-.21.228-.21.623q0 .39.212.62q.213.231.576.231q.364 0 .577-.23t.212-.621a.88.88 0 0 0-.214-.612a.74.74 0 0 0-.579-.24M14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5V6h12v-.5a1.5 1.5 0 0 0-1.355-1.493z"
            />
          </svg>
        }
        className="input input-bordered input-accent w-full max-w-xs text-center text-xl"
      />
      <button className="btn  btn-accent text-xl">
        Reveal NASA&apos;s Secrets
      </button>
      <div className="divider ">
        {" "}
        <span className="opacity-50 text-accent">||</span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-6 mt-8">
        <div className="w-full md:mx-auto pl-4 m-4">
          <Image
            src=""
            alt="stellar snapshot"
            width={536}
            height={354}
            className="skeleton w-full text-center text-base-100 rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2 m-4">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Field Notes</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras
              ultricies, nisi vitae finibus dictum, arcu metus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
