import Button from "../Button";
import Img from "../Img";
import Text from "../Text";
import Link from "next/link";
import React from "react";


export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center gap-5 px-5 py-3 bg-gray-900_01 rounded-[28px]`}
    >
      <Img
        src="vector.svg"
        width={172}
        height={28}
        alt="Header Logo"
        className="h-[28px] w-[172px] self-end object-contain"
      />

      {/* Navigation Links */}
      <ul className="flex flex-wrap gap-4">
        <li>
          <Link href="#">
            <Text
              as="p"
              className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700"
            >
              Home
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text
              as="p"
              className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700"
            >
              About
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text
              as="p"
              className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700"
            >
              How it works
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text
              as="p"
              className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700"
            >
              Services
            </Text>
          </Link>
        </li>
      </ul>

      <Button
        shape="round"
        className="min-w-[136px] rounded-[16px] px-[30px] tracking-[-0.96px] sm:px-5"
      >
        Get App
      </Button>
    </header>
  );
}
