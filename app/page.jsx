import React from "react";
import { VortexDemo } from "./HomepageComponents/vortexBackground";
import HomeDescription from "./HomepageComponents/HomeDescription";

import Weddings from "./Services/Weddings";
import Corporate from "./Services/Corporate";
import PartyPlanning from "./Services/PartyPlanning";
import VenueManagement from "./Services/VenueManagement";
import ArtistManagement from "./Services/ArtistManagement";

const page = () => {
  return (
    <>
      <div>
        <div className="sm:hidden pt-4 px-2 text-lg font-semibold flex gap-2 bg-black text-white">
          <img
            src="/assets/images/logo2.png"
            alt="logo"
            height={30}
            width={30}
          />
          <p>Exotic Celebrations</p>
        </div>
        <VortexDemo />

        <div className="sm:h-[35vh] h-[35vh] sm:mt-0 bg-gradient-to-b from-black via-slate-950 to-white dark:bg-none dark:bg-black text-white font-semibold text-center sm:text-5xl text-base p-4">
          "Crafting Extraordinary Moments, One Celebration at a Time"
        </div>
        {/* <div
          className="sm:h-[30vh] h-[15vh] dark:hidden
bg-gradient-to-b from-black via-slate-950 to-white dark:bg-none dark:bg-transparent "
        /> */}
        <HomeDescription />
        <Weddings />
        <Corporate />
        <PartyPlanning />
        <VenueManagement />
        <ArtistManagement />
      </div>
    </>
  );
};

export default page;
