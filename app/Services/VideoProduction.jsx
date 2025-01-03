import React from "react";

const VideoProduction = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center p-5 bg-fixed relative"
        style={{ backgroundImage: "url('/assets/images/eventVenue.jpg')" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center">
          <p className="text-white dark:text-white text-2xl font-semibold">
            VIDEO PRODUCTION
          </p>
        </div>
      </div>
      <div className="m-auto sm:w-[80vw] w-full sm:p-2 p-4 mt-10 text-center ">
        <p className="text-center text-3xl">VIDEO PRODUCTION</p>
        
        <p className=" sm:w-[80%] text-left m-auto mt-10">
        We aren’t just an events company anymore, we are proud to launch a huge new arm of our company... EAE Productions
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-10">
        Led by Emmy Winning Director, Ken Fay, our video production team can handle any of your media needs.  From capturing your event in HD and all it’s glory, to shooting that commercial you’ve always wanted but never knew could figure out what was missing to make it happen.  That’s where EAE Productions comes in.  
        </p>
        <p className=" sm:w-[80%] text-left m-auto my-10">
        We are a one stop shop for all media production needs.  There is no video too small; from social media videos to even that big movie idea you have, we can handle it all.   Call us today for a full service quote!
        </p>
       
      </div>
    </div>
  );
};

export default VideoProduction;
