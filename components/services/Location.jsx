import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { locationData } from "../../static/home";

export default function Location() {
  const { query } = useRouter();
  const value = query.data;
  return (
    <div className="container py-14 lg:py-28 hero-bg px-4">
      <h1 className="text-left mb-7 text-white font-black neue-haas text-3xl sm:text-5xl lg:text-5xl lg:w-12/12">
        {value}
      </h1>
      <p className="text-white">
        Here we provide all our services in {value}.We will be very happy if we
        can help you by our services.
      </p>
      <br />
      <p className="text-white">It is present in this areas : </p>
      {Object.keys(locationData).map((item, idx) => (
        <>
          {item === value &&
            locationData[item].map((name, id) => (
              <div className="flex mb-1 md:mb-2 cursor-pointer items-center ml-8">
                <div className="block w-2 md:w-3 mt-1">
                  <Image
                    src="/images/arrow.svg"
                    alt=""
                    width={20}
                    height={11}
                  />
                </div>

                <div className="ml-2 text-base lg:text-xl text-white">
                  <span className={"mt-1 block"}>{name}</span>
                </div>
              </div>
            ))}
        </>
      ))}
    </div>
  );
}
