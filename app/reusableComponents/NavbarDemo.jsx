"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

function NavbarDemo() {
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
          <MenuItem setActive={setActive} item="Portfolio" active={active}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/image-gallery">Image Gallery</HoveredLink>
              <HoveredLink href="/video-gallery">Videos Gallery</HoveredLink>
              
            </div>
          </MenuItem>
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
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
        </Menu>
      </div>
      <button
        className={
          " text-xl sm:hidden  text-gray-500  dark:text-white p-4 fixed top-0 right-0 " +
          (isSidebarOpen ? "hidden" : "block")
        }
        onClick={toggleSidebar}
      >
        ☰
      </button>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div className="w-64 bg-gray-100 dark:bg-black h-full shadow-lg z-50 p-6">
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
              <p
                className="block text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
                href="/client"
              >
                Client
              </p>
              <div>
                <button
                  id="dropdownButton"
                  className="w-full flex justify-between  rounded text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
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
                  className="hidden  mt-2 space-y-2 rounded"
                >
                  <p
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/image-gallery"
                  >
                    Image Gallery
                  </p>
                  <p
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/video-gallery"
                  >
                    Videos Gallery
                  </p>
                </div>
              </div>
              <p
                className="block text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
                href="/team"
              >
                Team
              </p>
              <div>
                <button
                  id="dropdownButton"
                  className="w-full flex justify-between  rounded text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
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
                  className="hidden  mt-2 space-y-2 rounded"
                >
                  <a
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/weddings"
                  >
                    Weddings
                  </a>
                  <a
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/corporate"
                  >
                    Corporate
                  </a>
                  <a
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/party-planning"
                  >
                    Party Planning
                  </a>
                  <a
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/venue-management"
                  >
                    Venue Management
                  </a>
                  <a
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/artist-management"
                  >
                    Artist Management
                  </a>
                  <a
                    className="block px-4 text-lg font-semibold rounded dark:text-gray-400 text-black "
                    href="/video-production"
                  >
                    Video Production
                  </a>
                </div>
              </div>
              <p
                className="block text-lg font-semibold dark:text-gray-400 text-black hover:text-yellow-500 transition"
                href="/contact"
              >
                Contact
              </p>
            </div>
          </div>
          {/* Click outside sidebar to close */}
          <div
            className="flex-grow"
            onClick={() => setSidebarOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
