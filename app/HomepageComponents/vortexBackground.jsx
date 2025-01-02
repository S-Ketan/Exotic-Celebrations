import React from "react";
import { Vortex } from "../../components/ui/vortex";
import Image from "next/image";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto  mt-0 sm:h-[80vh] h-[60vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full "
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center sm:block hidden">
          Exotic Celebrations
        </h2>
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center sm:hidden ">
          Event Management
        </h2>

        <Image
          src="/assets/images/logo2.png"
          alt="Exotic Event"
          width={100}
          height={100}
          className="rounded-md mt-4"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            About Us
          </button>
        </div>
      </Vortex>
    </div>
  );
}
