import React from "react";
import { templateData } from "../../../static/home";

export default function Launch() {
  return (
    <div>
      <div className="pl-5 md:pl-20 mb-10 mt-20 md:mt-28">
        <h2 className="text-2xl md:text-5xl mb-1 text-white font-black neue-haas">
          Goal based templates
        </h2>
        <h3 className="text-lg md:text-xl text-white mb-2 w-12/12 lg:w-6/12">
          Well researched, pre-filled and made for product research
        </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 md:px-20 gap-4 content-center">
        {templateData.map(({ title, description, image }, idx) => (
          <div
            key={idx}
            className="flex mb-1 md:mb-2 cursor-pointer bg-secondary rounded-2xl border border-solid border-secondary "
          >
            <img
              className="h-full"
              src={"https://cdn.blitzllama.com/assets/survey/" + image}
            />
            <div className={"text-white p-5 md:p-8 pl-5 "}>
              <h2 className="font-black text-base md:text-base h-10 md:h-12">
                {title}
              </h2>
              <h3 className="text-sm md:text-base mt-2 mb-2">{description}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="md:pl-20 mt-10 md:pb-20">
        <h2 className="text-xl md:text-3xl mb-1 text-white font-black neue-haas ml-5 md:ml-0">
          &amp; many more
        </h2>
      </div>
    </div>
  );
}
