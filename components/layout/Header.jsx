import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 md:px-10 py-2 border-b-1 border-white border-opacity-10 h-auto">
        <div className="container mx-auto flex flex-wrap flex-row items-center justify-between">
          <div className="w-full relative flex items-center lg:w-auto">
            <Link href="/">
              <div
                className="flex items-center text-white font-bold  mr-2"
                style={{ cursor: "pointer" }}
              >
                <Image
                  className="mr-1 w-6 md:w-auto"
                  src="/images/watch.svg"
                  alt=""
                  width={28}
                  height={26}
                />{" "}
                <span className="text-base lg:text-lg text-danger tracking-widest font-black ml-2">
                  JGEC SERVICES
                </span>
              </div>
            </Link>

            <div className="md:hidden ml-auto">
              <Link href="/pricing">
                <h1 className="text-white text-base font-bold px-10">
                  Pricing
                </h1>
              </Link>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow lg:items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <Link href="/about">
                  <h1 className="text-white text-base font-bold px-10">
                    About
                  </h1>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Link href="/services">
                <button
                  className="text-white font-bold px-6 py-2 rounded-lg border-primary border-solid border-1 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
