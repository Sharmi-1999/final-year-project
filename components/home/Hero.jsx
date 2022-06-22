import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

export default function Hero() {
  const texts = ["service", "help", "support"];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setActiveIdx((activeIdx + 1) % texts.length),
      2000
    );
    return () => clearInterval(intervalId);
  }, [activeIdx]);

  return (
    <div className="container py-20 lg:py-28 hero-bg">
      <div className="grid justify-items-center mt-1">
        <h1 className="text-center mb-7 text-white font-black neue-haas text-4xl sm:text-5xl lg:text-7xl lg:w-12/12 px-3">
          All you need ,{" "}
          <ReactTextTransition
            text={texts[activeIdx]}
            springConfig={{ stiffness: 50, damping: 20 }}
            style={{ display: "inline-block", width: "6ch" }}
            className="text-secondary"
          />{" "}
          <br />
          is what you will find here!
        </h1>
      </div>

      <div className="flex justify-center">
        <h3 className="text-lg md:text-xl text-center text-white mb-2 w-10/12 lg:w-6/12">
          Multiple services in one place
        </h3>
      </div>

      <div className="text-center">
        <Link href={"/services"}>
          <button
            type="button"
            className="inline-flex items-center bg-primary  pl-10 pr-5 py-3 mt-5 rounded-lg mx-6 hover:bg-primary font-bold"
          >
            <span className="text-white text-sm md:text-xl">
              Get Started For Free
            </span>
            <div className="pl-5">
              <Image src="/images/arrow.svg" alt="" width={20} height={11} />
            </div>
          </button>
        </Link>
      </div>
      <div className="grid justify-items-center mt-1"></div>
    </div>
  );
}
