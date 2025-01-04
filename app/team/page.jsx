import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center p-5 bg-fixed relative"
        style={{ backgroundImage: "url('/assets/images/eventVenue.jpg')" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center">
        <p className="text-white dark:text-white text-3xl dark:font-light font-raleway">
            OUR TEAM
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
