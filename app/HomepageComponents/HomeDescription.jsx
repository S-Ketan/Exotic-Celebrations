import React from 'react'
import { StickyScrollRevealDemo } from './StickyScrollReveal'

const HomeDescription = () => {
  return (
    <div>
         <div
          className="h-[50vh] text-center flex items-center flex-col justify-center gap-10 px-2 
dark:bg-none dark:bg-transparent dark:text-white"
        >
          <p className="sm:text-3xl text-lg">
            CREATING MEMORABLE EVENTS TAILORED TO CLIENTS
          </p>
          <p className="sm:w-[80%] text-sm">
            Based in Los Angeles, elleaevents designs and executes special
            occasions shaped to meet the client's style and personality. From
            large, branded corporate events to intimate weddings and everything
            in between, Elle Anderson and her team provide unique insights that
            will make your big day unforgettable.
          </p>
        </div>
        <div
          className="h-[50vh] bg-cover bg-center p-5 bg-fixed relative"
          style={{ backgroundImage: "url('/assets/images/happyClientPic.jpg')" }}
        >
          <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center">
            <p className="text-white dark:text-white text-2xl font-semibold">
              HAPPY CLIENTS
            </p>
          </div>
        </div>
        <div className="h-[85vh]">
           <StickyScrollRevealDemo />
        </div>
    </div>
  )
}

export default HomeDescription