import React from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceData } from "../../static/home";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  return (
    <div className="container py-14 lg:py-28 hero-bg px-4">
      <h1 className="text-left mb-7 text-white font-black neue-haas text-3xl sm:text-5xl lg:text-5xl lg:w-12/12">
        Services
      </h1>

      <div className="grid  grid-cols-1  md:grid-cols-12	gap-8">
        <div className="col-span-3 md:col-start-1 md:col-span-10 md:flex items-center md:justify-between">
          {serviceData.map(({ title, locations }, idx) => (
            <div key={idx}>
              <div className="flex mb-1 md:mb-2 cursor-pointer items-center">
                <div className="block w-2 md:w-3 mt-1">
                  <Image src="/images/dot.svg" alt="" width={4} height={4} />
                </div>

                <div className="ml-2 text-base lg:text-xl font-black text-white">
                  <span className={"mt-1 block"}>{title}</span>
                </div>
              </div>
              {locations.map((item, id) => (
                <div key={id}>
                  <Link
                    href={`services/location?data=${encodeURIComponent(item)}`}
                  >
                    <div className="flex mb-1 md:mb-2 cursor-pointer items-center ml-8">
                      <div className="block w-2 md:w-3 mt-1">
                        <Image
                          src="/images/arrow.svg"
                          alt=""
                          width={20}
                          height={11}
                        />
                      </div>

                      <div className="ml-2 text-base lg:text-xl text-white hover-class">
                        <span className={"mt-1 block"}>{item}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
