import Img from "@/components/Img";
import Text from "@/components/Text";
import { Heading } from "@/components/Heading";
import ImageGallery from "@/components/ImageGallery";
import React from "react";

export default function ClientShowcaseSection() {
  return (
    <>
      {/* Client Showcase Section */}
      <div className="flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[50px] md:px-5">

          {/* Section Header */}
          <div className="mx-32 flex flex-col items-center gap-[18px] md:mx-0">
            
            {/* Tag */}
            <div className="relative h-[30px] w-[12%] content-center rounded-[14px] border border-solid border-deep_purple-50_01 bg-gradient md:h-auto">
              <Img
                src="img_noise_30x96.png"
                width={96}
                height={30}
                alt="Noise Image"
                className="h-[30px] flex-1 object-cover opacity-50"
              />
              <Text
                as="p"
                className="absolute bottom-0 right-[6.50px] top-0 my-auto h-max font-manrope text-[16px] font-normal tracking-[-0.75px] text-primary-purple_normal"
              >
                Our Clients
              </Text>
            </div>

            {/* Heading and Description */}
            <div className="flex flex-col items-center gap-2.5 self-stretch px-10 sm:px-5">
              <Heading
                as="p"
                className="text-[48px] font-normal tracking-[-3.83px] text-gray-900_01 md:text-[44px] sm:text-[38px]"
              >
                Trusted by Industry Leaders
              </Heading>
              <Text
                as="p"
                className="self-stretch text-center font-manrope text-[16px] font-normal leading-[22px] tracking-[-0.75px] text-blue_gray-400"
              >
                Join our roster of satisfied clients and experience the exceptional results and service that have
                earned us the trust of industry leaders worldwide.
              </Text>
            </div>
          </div>

          {/* Client Logos and Gallery */}
          <div className="flex gap-[104px] md:flex-col">
            
            {/* Gallery Items */}
            <ImageGallery className="w-[22%]" />

            {/* Company Logos */}
            <Img
              src="img_company_logo.svg"
              width={126}
              height={48}
              alt="Company Logo"
              className="h-[48px] w-[20%] object-contain md:w-full"
            />
            <Img
              src="img_company_logo_black_900.svg"
              width={120}
              height={48}
              alt="Company Logo"
              className="h-[48px] w-[18%] object-contain md:w-full"
            />
            <Img
              src="img_company_logo_white_a700.svg"
              width={128}
              height={48}
              alt="Company Logo"
              className="h-[48px] w-[20%] object-contain md:w-full"
            />

            {/* Another Gallery Section */}
            <ImageGallery
              thumbsUpImage="img_close.svg"
              logoImage="img_settings.png"
              className="w-[18%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}