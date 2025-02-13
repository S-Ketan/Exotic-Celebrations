"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children
}) => {
  const handleMouseEnter = () => {
    if (setActive) {
      setActive(item);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] dark:text-white font-raleway text-lg">
        {href ? (
          <Link href={href}>
            {item}
          </Link>
        ) : (
          item
        )}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`relative border border-transparent shadow-input flex justify-center space-x-4 sm:-8 mx-0 py-6 transition-colors duration-500 ${
        isTop ? "bg-transparent text-white" : "bg-white dark:bg-black"
      }`}>
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <Link href={href} className="flex space-x-2" target="_blank">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white font-raleway">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300 font-nunito">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black font-raleway text-base">
      {children}
    </Link>
  );
};
