import React from "react";
import Link from "next/dist/client/link";
import { integrateData } from "../../static/home";

export default function Integrate() {
  return (
    <>
      <div className="grid justify-items-center py-8 md:py-8"></div>
      <div className="grid justify-items-center">
        <h2 className="text-3xl text-center md:text-5xl text-white mb-10 px-5 font-black">
          It takes just few minutes to contact us
        </h2>

        <Link href={"/services"}>
          <button
            type="button"
            className="inline-flex items-center bg-primary text-white text-lg md:text-xl pl-10 pr-5 py-3 mt-10 rounded-lg mx-6 mb-20 hover:bg-primary font-bold"
            onClick={() => setShowModal(true)}
          >
            <span>Get started for free</span>
            <img className="pl-5" src="/images/arrow.svg" />
          </button>
        </Link>
        <p className="text-lg md:text-2xl text-center text-white mb-2 w-10/12 lg:w-6/12">
          Once you try, you will love us
        </p>
        <div className="grid md:grid-cols-3 md:w-12/12 lg:w-10/12 px-5 md:px-20 gap-4 content-center py-5">
          {integrateData.map(({ title }, idx) => (
            <div
              key={idx}
              className="flex mb-1 md:mb-2 items-center cursor-pointer bg-secondary py-4 px-5 rounded-xl border border-solid border-secondary "
            >
              <img className="w-10 h-10" src="/images/right.svg" />

              <h2 className={"ml-3 text-white font-bold text-base md:text-lg "}>
                {title}
              </h2>
            </div>
          ))}
        </div>
        <div className="pb-20"></div>
      </div>
    </>
  );
}
