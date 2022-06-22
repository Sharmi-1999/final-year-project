import React from "react";
import Image from "next/image";
import { serviceData } from "../../static/home";

export default function Main() {
  return (
    <div className="container py-14 lg:py-28 hero-bg px-4">
      <h1 className="text-left mb-7 text-white font-black neue-haas text-3xl sm:text-5xl lg:text-5xl lg:w-12/12">
        Services
      </h1>

      <div>
        {serviceData.map(({ title }, idx) => (
          <div
            key={idx}
            className="flex mb-1 md:mb-2 cursor-pointer items-center"
          >
            <div className="block w-2 md:w-3 mt-1">
              <Image src="/images/dot.svg" alt="" width={4} height={4} />
            </div>

            <div className="ml-2 text-base lg:text-xl text-white">
              <span className={"mt-1 block"}>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
