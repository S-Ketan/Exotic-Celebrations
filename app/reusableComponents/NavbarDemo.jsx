"use client";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

function NavbarDemo() {
  const [active, setActive] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full flex items-center justify-center z-50">
      <Navbar className="top-2" />
    </div>
  );
}

export default NavbarDemo;
function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={cn(
          "fixed top-0 mt-0 inset-x-0 w-full text-sm sm:text-base mx-auto z-50 hidden sm:block",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} item="Home" href="/" />
          <MenuItem setActive={setActive} item="Client" href="/client" />
         {/*  <MenuItem setActive={setActive} item="Portfolio" active={active}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/image-gallery">Image Gallery</HoveredLink>
              <HoveredLink href="/video-gallery">Videos Gallery</HoveredLink>
            </div>
          </MenuItem> */}
          <MenuItem setActive={setActive} item="Team" href="/team" />

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/weddings">Weddings</HoveredLink>
              <HoveredLink href="/corporate">Corporate</HoveredLink>
              <HoveredLink href="/party-planning">Party Planning</HoveredLink>
              <HoveredLink href="/venue-management">
                Venue Management
              </HoveredLink>
              <HoveredLink href="/artist-management">
                Artist Management
              </HoveredLink>
              <HoveredLink href="/video-production">
                Video Production
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Instagram"
                href="https://www.instagram.com/the_exotics_celebrations"
                src="https://i.pinimg.com/736x/2e/f6/95/2ef695843e8c040354804122b160eb28.jpg"
                description="Connect with us on Instagram"
              />
             {/*  <ProductItem
                title="Facebook"
                href="https://tailwindmasterkit.com"
                src="https://i.pinimg.com/736x/6c/ff/32/6cff32688581d2a75d4511dad0d56ecb.jpg"
                description="Follow us on Facebook"
              /> */}
              <ProductItem
                title="Gmail"
                href="mailto:ketan10923@gmail.com"
                src="https://i.pinimg.com/736x/be/de/19/bede19e1cc44044c8eb11ecae70c5903.jpg"
                description="Email us for any queries"
              />
            {/*   <ProductItem
                title="LinkedIn"
                href="https://userogue.com"
                src="https://i.pinimg.com/736x/ba/72/3f/ba723fc8dfb5362956a680df14943be3.jpg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              /> */}
            </div>
          </MenuItem>
        </Menu>
      </div>
      <button
        className={
          "text-xl sm:hidden text-gray-500 dark:text-white p-4 fixed top-0 right-0 transition-opacity duration-300 " +
          (isSidebarOpen ? "opacity-0" : "opacity-100")
        }
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-64 bg-gray-100 dark:bg-black h-full shadow-lg z-50 p-6 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="text-black dark:text-gray-500 text-2xl absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <div className="mt-10 space-y-4">
            <a
              className="block text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
              href="/"
            >
              Home
            </a>
            <a
              className="block text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
              href="/client"
            >
              Client
            </a>
            {/* <div>
              <button
                id="dropdownButton"
                className="w-full flex justify-between rounded text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
                onClick={() => {
                  portfolioMenu.classList.toggle("hidden");
                  portfolioIcon.textContent =
                    portfolioMenu.classList.contains("hidden") ? "▼" : "▲";
                }}
              >
                <span>Portfolio</span>
                <span id="portfolioIcon">▼</span>
              </button>
              <div
                id="portfolioMenu"
                className="hidden mt-2 space-y-2 rounded transition-all duration-300 ease-in-out"
              >
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/image-gallery"
                >
                  Image Gallery
                </a>
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/video-gallery"
                >
                  Videos Gallery
                </a>
              </div>
            </div> */}
            <a
              className="block text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
              href="/team"
            >
              Team
            </a>
            <div>
              <button
                id="dropdownButton"
                className="w-full flex justify-between rounded text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
                onClick={() => {
                  serviceMenu.classList.toggle("hidden");
                  serviceIcon.textContent = serviceMenu.classList.contains(
                    "hidden"
                  )
                    ? "▼"
                    : "▲";
                }}
              >
                <span>Services</span>
                <span id="serviceIcon">▼</span>
              </button>
              <div
                id="serviceMenu"
                className="hidden mt-2 space-y-2 rounded transition-all duration-300 ease-in-out"
              >
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/weddings"
                >
                  Weddings
                </a>
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/corporate"
                >
                  Corporate
                </a>
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/party-planning"
                >
                  Party Planning
                </a>
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/venue-management"
                >
                  Venue Management
                </a>
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/artist-management"
                >
                  Artist Management
                </a>
                <a
                  className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black"
                  href="/video-production"
                >
                  Video Production
                </a>
              </div>
            </div>
            <a
              className="block text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
        {/* Click outside sidebar to close */}
        <div className="flex-grow" onClick={() => setSidebarOpen(false)}></div>
      </div>
    </>
  );
}
