"use client";
import Img from "@/components/Img";
import { Input } from "@/components/Input";
import { Heading } from "@/components/Heading";
import React from "react";

export default function CallToActionSection() {
  return (
    <>
      <div className="flex justify-center mb-10 self-stretch">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex h-[570px] w-full items-center justify-center rounded-[24px] border border-solid border-blue_gray-50 bg-deep_purple-a100 bg-[url(/images/img_cta_section.png)] bg-cover bg-no-repeat px-14 py-[110px] md:h-auto md:p-5">
            <div className="flex w-[50%] flex-col items-center justify-center gap-12 md:w-full">
              <Img
                src="img_lock_white_a700.svg"
                width={58}
                height={56}
                alt="Lock Image"
                className="h-[56px] w-[12%] object-contain"
              />
              <div className="flex flex-col items-center gap-[22px] self-stretch px-[18px]">
                <Heading
                  as="p"
                  className="mt-1 text-[48px] font-normal tracking-[-3.83px] text-white-a700 md:text-[44px] sm:text-[38px]"
                >
                  Reach out to us via email
                </Heading>
                <Heading
                  size="textmd"
                  as="h2"
                  className="self-stretch text-center text-[20px] font-normal leading-6 tracking-[-0.96px] text-white-a700"
                >
                  We're here to help!
                </Heading>
              </div>

              {/* Email Input with Styled Send Button */}
              <div className="flex w-full max-w-[500px] items-center rounded-[12px] bg-white px-2 shadow-lg">
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder="Enter your email"
                  className="flex-1 border-none px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="ml-2 flex items-center justify-center rounded-[10px] bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}