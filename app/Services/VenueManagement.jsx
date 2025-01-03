import React from "react";

const VenueManagement = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center p-5 bg-fixed relative"
        style={{ backgroundImage: "url('/assets/images/eventVenue.jpg')" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center">
          <p className="text-white dark:text-white text-2xl font-semibold">
          VENUE MANAGEMENT
          </p>
        </div>
      </div>
      <div className="m-auto sm:w-[80vw] w-full sm:p-2 p-4 mt-10 text-center ">
        <p className="text-center text-3xl">VENUE MANAGEMENT</p>
        <p className="mt-10 font-bold text-xl text-left m-auto sm:w-[80%] ">
          VENUES AND VENUE BOOKING AGENTS
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-5 ">
          We are able to represent your venue as a 'Venue Booking Agent' in
          which we create and negotiate contracts, coordinate and produce (when
          applicable) all proposed events and productions held at the agreed
          upon venue.
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-5">
          If the agent services are needed for an extended period of time (over
          a year), the terms can be changed to reflect an ongoing relationship
          for bookings during the term of the agreement. The contract is set up
          to be an exclusive partnership between the venue booking agent and the
          venue itself.
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-5 text-xl">
          VENUE COORDINATION
        </p>
        <p className=" sm:w-[80%] text-left m-auto my-10">
          Exotic Celebrations will ensure the following:
        </p>
        <ul className="mt-5 list-disc list-inside mb-10 text-left sm:w-[80%] m-auto">
          <li>Contract terms are adhered to</li>
          <li>Client special requests are handled</li>
          <li>Keeping staff (sometimes includes catering/bar) on task </li>
          <li>
            Managing the venue to the expectations of the owner and acting as an
            advocate for the venue and it's staff{" "}
          </li>
          <li>
            Overseeing event closure (ie. making sure guests safely depart, load
            out is on time with vendors according to owners requests, etc.){" "}
          </li>
          <li>Running tasks during the event</li>
        </ul>
      </div>
    </div>
  );
};

export default VenueManagement;
