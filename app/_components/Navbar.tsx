"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    window.removeEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [scrolled]);
  return (
    <div
      className={`bg-transparent ${
        scrolled
          ? "filter transition-all duration-300 backdrop-blur-md border-b border-neutral-600"
          : "bg-transparent"
      } text-neutral-50 z-50 fixed top-0 h-16 flex items-center justify-between w-full  px-8 md:px-20 `}
    >
      <div>
        <a className="text-neutral-50 font-semibold text-xl" href="/">
          Admark8
        </a>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Button variant={'outline'} size={'icon'}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="text-neutral-50 flex flex-col justify-between bg-transparent backdrop-blur-lg border-neutral-600">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="flex flex-col my-auto gap-3 mx-auto justify-center">
            <div className="hover:opacity-50 text-start cursor-pointer transition-all ease-in duration-300">
              About
            </div>
            <div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
              Contact
            </div>
            <div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
              Privacy Policy
            </div>
          </div>
          <SheetFooter className="mt-auto float-left">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>{`Sign Up`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="md:flex justify-center items-center space-x-4 hidden">
        <div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
          About
        </div>
        <div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
          Contact
        </div>
        <div className="">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>{`Sign Up`}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
