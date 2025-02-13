import React from "react";

const ArtistManagement = ({ imgUrl }) => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center p-5 bg-fixed relative"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center backdrop-blur-sm">
          <p className="text-white dark:text-white text-3xl dark:font-light font-raleway">
          
            Artist Management
          </p>
        </div>
      </div>
      <div className="m-auto sm:w-[80vw] w-full sm:p-2 p-4 mt-14 text-center font-nunito ">
        <p className="text-left text-3xl sm:w-[80%] m-auto font-raleway">
          ARTIST MANAGEMENT
        </p>

        <p className=" sm:w-[80%] text-left m-auto mt-5 ">
          Our managers guide our artists throughout the entertainment business,
          from booking jobs to negotiating deals..
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-5 mb-36">
          In a general sense, we have the task to take care of the day-to-day
          running of our artists career. To advise and counsel about
          professional and personal matters and how they may affect their
          carrer.
        </p>
      </div>
    </div>
  );
};

export default ArtistManagement;
