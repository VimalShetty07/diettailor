'use client';

import Button from "../Button";
import Img from "../Img";
import Text from "../Text";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header({ ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header
      {...props}
      className={`${props.className} flex flex-row justify-between items-center px-5 py-3 bg-gray-900_01 rounded-[28px] shadow-lg`}
    >
      {/* Logo */}
      <Img
        src="vector.svg"
        width={172}
        height={28}
        alt="Header Logo"
        className="h-[28px] w-[172px] object-contain"
      />

      {/* Desktop Navigation */}
      <ul className="sc:hidden flex flex-wrap gap-10">
        {["Home", "About", "How it works", "Services"].map((item, index) => (
          <li key={index}>
            <Link href="#">
              <Text
                as="p"
                className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white"
              >
                {item}
              </Text>
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="hidden sc:flex flex items-center justify-center p-2 text-white"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sliding Rounded Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[340px] bg-white bg-opacity-90 rounded-l-[32px] shadow-2xl backdrop-blur-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-[100] flex flex-col justify-start items-start`}
      >
        <button
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-800 text-white shadow-md"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Links in Drawer */}
        <ul className="flex flex-col items-start gap-8 mt-20 px-10 w-full">
          {["Home", "About", "How it works", "Services"].map((item, index) => (
            <li key={index}>
              <Link href="#" onClick={toggleMenu}>
                <Text
                  as="p"
                  className="text-xl font-manrope tracking-wide text-gray-800"
                >
                  {item}
                </Text>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button in Drawer */}
        <Button
          shape="round"
          className="mt-12 ml-10 min-w-[180px] px-10 py-4 text-lg tracking-[-0.96px] bg-gray-900 text-white"
          onClick={toggleMenu}
        >
          Get App
        </Button>
      </div>

      {/* Desktop CTA Button */}
      <Button
        shape="round"
        className="sc:hidden flex min-w-[136px] px-[30px] tracking-[-0.96px]"
      >
        Get App
      </Button>
    </header>
  );
}