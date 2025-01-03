import React from 'react'

const PartyPlanning = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center p-5 bg-fixed relative"
        style={{ backgroundImage: "url('/assets/images/eventVenue.jpg')" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center">
          <p className="text-white dark:text-white text-2xl font-semibold">
            Party-Planning
          </p>
        </div>
      </div>
      <div className="m-auto sm:w-[80vw] w-full sm:p-2 p-4 mt-10 text-center ">
      <p className="text-center text-3xl">PARTY PLANNING BY DESIGN+</p>
      
        <p className=" sm:w-[80%] text-left m-auto mt-10">
        You want a party but not the planning that goes with it? Perfect. We know first hand that planning an event on your own can be difficult and extremely time-consuming. Having a celebration is supposed to be fun, so leave your stress at home and let us do the work for you!
        </p>
        <p className=" sm:w-[80%] text-left m-auto mt-10">
        We work with each client to help them design a custom theme, find the perfect venue, coordinate entertainment, handle catering/bar services and curate the guest list. We also offer decor and styling services so each event can be tailored specific to your taste, resulting in a once in a lifetime experience. 
        </p>
        <p className=" sm:w-[80%] text-left m-auto my-10">
        Exotic Celebrations can help you create a fun and successful event, so the only planning you need to worry about is what to wear!  
        </p>
       
      </div>
    </div>
  )
}

export default PartyPlanning