import React from "react";
import Image from "next/image";

const Weddings = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center p-5 bg-fixed relative"
        style={{ backgroundImage: "url('/assets/images/eventVenue.jpg')" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 flex items-center justify-center">
          <p className="text-white dark:text-white text-2xl font-semibold">
            Weddings
          </p>
        </div>
      </div>
      <div className="m-auto sm:w-[80vw] p-3 mt-10 text-center sm:text-base text-sm ">
        <p className="text-center text-3xl">WEDDING PACKAGES</p>
        <p className="text-center sm:w-[50%]  m-auto mt-10">
          Exotic Celebrations offers a variety of packages to meet your specific
          wedding planning needs. While the packages range in services offered,
          each includes consulting with a team of experts who have experience in
          wedding planning. If there is a package that doesn't quite fit what
          you're looking for, please contact us for individualized options.
        </p>
        <div className="mt-10 mx-auto flex justify-center">
          <Image
            src="/assets/images/logo2.png"
            alt="Exotic Event"
            width={100}
            height={100}
            className="rounded-md mt-4"
          />
        </div>
        <p className="text-xl mt-10 font-bold">
          INITIAL CONSULTATION - COMPLEMENTARY
        </p>
        <p className="mt-5 text-left">
          The initial consultation is just for us for us to get to know each
          other and answer any questions you may have. We can help guide you, if
          needed, to identify your taste, style, budget, and vision, so that we
          can make the most of our time together and give you a great starting
          point for your planning. This consultation can last up to one hour.
        </p>
        <p className="text-xl mt-10 font-bold">DAY OF COORDINATION</p>
        <div className="mt-5 text-left p-2">
          <p>
            We want you to enjoy your day. This package is designed for couples
            that would like to do all the planning themselves, but want a
            professional to help them execute all of their hard work when their
            wedding day finally arrives. Your “day of coordinator” will help
            make your day unforgettable and stress free
          </p>
          <p className="mt-5">
            Wedding planning services include, but are not limited to the
            following:
          </p>
          <ul className="mt-5 list-disc list-inside">
            <li>Initial Consultation</li>
            <li>Thorough walkthrough of venue</li>
            <li>Manage day of for a total of 8 hours from planners arrival </li>
            <li>Team of experts day of </li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>Lead associate and coordinator </li>
            </ul>
            <li>
              Create detailed timeline of events and distribute accordingly
            </li>
            <li>Thorough vendor details</li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>Calling to confirm details and times of arrival/delivery</li>
              <li>Handle distribution of payment to each vendor </li>
            </ul>
            <li>Handle clients “final touches,” such as:</li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>
                Setting out programs, Reserved signs, Menu cards, Place cards,
                Gift Table, Guest book
              </li>
            </ul>
            <li>
              Assist with direction of guest seating for ceremony and reception
            </li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>Access to planners wedding day emergency kit </li>
            </ul>
          </ul>
          <p className="mt-5 italic">
            UNLIMITED PHONE AND EMAIL CORRESPONDENCE
          </p>
        </div>
        <p className="text-xl mt-10 font-bold">FULL EVENT PLANNING</p>
        <div className="mt-5 text-left p-2">
          <ul className="mt-5 list-disc list-inside">
            <li>Initial Consultation</li>
            <li>
              Comprehensive meeting with our in-house designers to get an
              understanding of your vision, style and design preferences{" "}
            </li>
            <li>Accompany you to 2 tastings and 3 site visits </li>
            <li>Design support for all aspects of the event </li>
            <li>Manage day of for a total of 8 hours from planners arrival</li>
            <li>Team of experts day of </li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>Lead associate and coordinator </li>
            </ul>
            <li>
              Create detailed timeline of events and distribute accordingly
            </li>
            <li>Thorough vendor details</li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>Calling to confirm details and times of arrival/delivery</li>
              <li>Handle distribution of payment to each vendor </li>
            </ul>
            <li>Handle clients “final touches,” such as:</li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>
                Setting out programs, Reserved signs, Menu cards, Place cards,
                Gift Table, Guest book
              </li>
            </ul>
            <li>
              Assist with direction of guest seating for ceremony and reception
            </li>
            <ul className="list-inside sm:pl-10 pl-3 list-[circle]">
              <li>Access to planners wedding day emergency kit </li>
            </ul>
          </ul>
          <p className="mt-5 italic">
            UNLIMITED PHONE AND EMAIL CORRESPONDENCE
          </p>
        </div>
        <p className="text-xl mt-10 font-bold">
          ABOVE AND BEYOND PLANNING PACKAGE
        </p>

        <div className="mt-5 text-left p-2">
          <ul className="mt-5 list-disc list-inside">
            <li>
              All services from the Day of Coordination and Full Event Planning
              Packages{" "}
            </li>
            <li>Help create wedding website</li>
            <li>Accompany you at all fittings, tastings and site visits</li>
            <li>
              Help with creating any of the ceremony or reception items
              (invitations, programs, menus, etc.)
            </li>
            <li>
              Help with organizing transportation coordination for you and your
              guests
            </li>
            <li>Help with booking and negotiating hotel slots for guests</li>
            <li>Help organizing RSVP's</li>
            <li>
              Lead coordinator and 3 assistants for the wedding (staffing
              dependent on guest count)
            </li>
            <li>Help sending "thank you" cards after wedding </li>
          </ul>
          <p className="mt-5 italic">
            UNLIMITED PHONE AND EMAIL CORRESPONDENCE
          </p>
        </div>
        <p className="text-2xl mt-10 font-bold italic">
          Pricing for all packages available upon request
        </p>
        <button
          href="/contact"
          className="bg-green-400 my-5 text-xl font-bold p-4 rounded-lg text-white"
        >
          Request Pricing
        </button>

        <hr
          style={{
            height: "2px",
            borderWidth: 0,
            color: "gray",
            backgroundColor: "gray",
          }}
        />
        <p className="mt-5">
          At Exotic Celebrations, we believe everyone deserves love and we are
          proud supporters of same-sex marriage.
          <strong>References available upon request.</strong>
        </p>
        <div className="mt-5 mx-auto flex justify-center p-2">
          <Image
            src="/assets/images/logo2.png"
            alt="Exotic Event"
            width={100}
            height={100}
            className="rounded-md mt-4"
          />
        </div>
        <hr
        className="my-10"
          style={{
            height: "3px",
            borderWidth: 0,
            color: "gray",
            backgroundColor: "gray",
          }}
        />
      </div>
    </div>
  );
};

export default Weddings;
