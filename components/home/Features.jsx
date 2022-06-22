import React from "react";
import Image from "next/image";
import { preciseData, launchData } from "../../static/home";

const Feature = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 md:grid-cols-11	 gap-4 py-10 md:py-14">
        <div className="col-span-12 md:col-start-2 md:col-span-5 flex items-center">
          <div className="px-5 md:px-0">
            <div className="flex items-center text-white font-bold  mr-2">
              <Image
                className="mr-1 w-6 md:w-auto"
                src="/images/watch.svg"
                width={28}
                height={26}
                alt=""
              />{" "}
              <span className="text-base lg:text-lg tracking-widest text-primary font-black ml-2">
                PRECISE & TARGETED
              </span>
            </div>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white mt-6 mb-6 lg:mb-10 neue-haas lg:w-10/12">
              Exact solution to all your problems
            </h2>
            <div className="col-span-12 md:col-start-8 md:col-span-4 flex items-center px-3 md:px-0">
              <div>
                {preciseData.map(({ title }, idx) => (
                  <div
                    key={idx}
                    className="flex mb-1 md:mb-2 cursor-pointer items-center"
                  >
                    <div className="block w-2 md:w-3 mt-1">
                      <Image
                        src="/images/dot.svg"
                        alt=""
                        width={4}
                        height={4}
                      />
                    </div>

                    <div className=" ml-2 text-base lg:text-xl text-white">
                      <span className={"mt-1 block"}>{title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:pr-20 md:col-start-7 md:col-span-12 md:pl-0">
          <div className="px-3 md:px-0 w-full">
            <Image
              src="/images/launch-img-2.svg"
              alt=""
              width={627}
              height={310}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
