import React from "react";
import Link from "next/link";

function FooterComponent() {
  return (
    <div>
      <hr />
      <div className="grid grid-cols-12 pt-20 px-4 md:px-20">
        <div className="col-start-1 col-span-3 md:col-start-3 md:col-span-4 md:ml-5">
          <div
            className="flex items-center text-white font-bold  mr-2"
            style={{ cursor: "pointer" }}
          >
            <img className="mr-1 w-6 md:w-auto" src="/images/launch.svg"></img>{" "}
            <span className="text-base lg:text-lg text-danger tracking-widest font-black ml-2">
              JGEC SERVICES
            </span>
          </div>
        </div>

        <div className="col-start-7 md:col-start-10 col-span-6 md:col-span-2 text-white font-bold">
          <ul>
            <li className="text-base lg:text-lg mb-2">
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li className="text-base lg:text-lg mb-2">
              <Link href="/privacy">Privacy policy</Link>
            </li>
            <li className="text-base lg:text-lg">
              <Link href="https://www.linkedin.com/company/blitz-llama/">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="font-light text-center text-white text-sm md:font-base py-8 md:py-16">
          ©2022 JGEC services., Jalpaiguri, West Bengal
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
