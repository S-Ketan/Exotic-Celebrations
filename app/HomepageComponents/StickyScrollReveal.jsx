"use client";
import React from "react";
import StickyScroll from "@/components/ui/sticky-scroll-reveal.jsx";
import Image from "next/image";

const content = [
    
    {
        title: "Mona M. ",
        description:
           '"I hired elleaevents to host the grand opening of our new salon in Beverly Hills. From the moment I met Elle and her team, I was sure my event was going to be a successful one. In fact, it was beyond what I could have expected or imagined." ',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Fernando G. ",
        description:
            '"When we hired Elle and her team, we got a creative and dynamic person who turned our wedding from a simple backyard dinner to a truly magical experience--all within our budget." ',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Julia S.",
        description:
            ' "I highly recommend elleaevents not only for their ability to totally produce your vision, but also for their friendliness and professionalism. It is so fun working with them!"',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Casey J.",
        description:
            '"Elle and her team at elleaevents were great! She was a pleasure to work with when helping plan my birthday party and her passion can really be seen through her work." ',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
   
];

export function StickyScrollRevealDemo() {
    return (
        <div className="p-10 scrollbar-hide">
            <StickyScroll content={content} />
        </div>
    );
}
