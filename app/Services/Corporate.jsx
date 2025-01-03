import React from "react";

const Corporate = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center p-5 bg-fixed relative"
        style={{ backgroundImage: "url('/assets/images/corporatePic.jpg')" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center">
          <p className="text-white dark:text-white text-2xl font-semibold">
            Corporate
          </p>
        </div>
      </div>
      <div className="m-auto sm:w-[80vw] w-full sm:p-2 p-4 mt-10 text-center ">
      <p className="text-center text-3xl">CORPORATE</p>
      <p className="mt-10 font-bold text-xl">MEETINGS, GALAS, OPENINGS, PRODUCT LAUNCHES</p>
        <p className=" sm:w-[80%] text-left m-auto mt-10">
        Every event has its own distinct audience, tone, personality, and set of objectives. From small meetings to large corporate galas, elleaevents ensures that each event is specifically created to match its' intent.
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-10">
        Through understanding a company's unique brand and identifying their target audience, our team designs an event concept and coordinates all technical aspects before the event begins. Because we understand the importance of creating a continuous relationship and helping create a shared vision for more events to come, we work with our clients to clarify their ideal business outcomes and streamline the logistics. 
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-10">
        Elle Anderson, CEO & Founder, is a Certified Conference Management and Event Specialist. Under her lead, our team has worked with companies on grand openings, product launches, holiday parties, charity events and fundraisers. Our corporate client list includes some of the world’s top corporations, from large public and private organizations to small boutique and start up businesses. 
        </p>
        <p className=" sm:w-[80%] text-left m-auto my-10">
        Whether you need help planning a conference, corporate luncheon, team-building event, award dinner, or holiday party, we can expertly create and execute any event to fit your vision and needs.
        </p>
      </div>
    </div>
  );
};

export default Corporate;
