import Img from "@/components/Img";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import React from "react";

export default function FeaturesSection() {
  return (
    <>
      <div className="flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[30px] md:px-5">
          <div className="flex flex-col gap-[50px] self-stretch">
            
            {/* Section Header */}
            <div className="mx-32 flex flex-col items-center gap-3.5 md:mx-0">
              <div className="relative h-[30px] w-[10%] content-center rounded-[14px] border border-solid border-deep_purple-50_01 bg-gradient md:h-auto">
                {/* <Img 
                  src="img_noise.png"
                  width={82}
                  height={30}
                  alt="Noise Image"
                  className="h-[30px] flex-1 object-cover opacity-50"
                /> */}
                <Text
                  as="p"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max font-manrope text-[16px] font-normal tracking-[-0.75px] text-primary-purple_normal"
                >
                  Features
                </Text>
              </div>

              <div className="flex flex-col items-center gap-4 self-stretch px-[38px] sm:px-5">
                <Heading
                  as="p"
                  className="text-[48px] font-normal tracking-[-3.83px] text-gray-900_01 md:text-[44px] sm:text-[38px]"
                >
                  Simple Steps to Smarter Nutrition
                </Heading>
                <Text
                  as="p"
                  className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-blue_gray-400"
                >
                  How it works
                </Text>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex items-end gap-7 rounded-[16px] border border-solid border-blue_gray-50 bg-white-a700 p-[46px] md:flex-col md:p-5">
              
              {/* Feature 1 */}
              <div className="relative h-[328px] w-[30%] content-center self-center md:h-auto md:w-full">
                <div className="flex flex-1 justify-center p-5">
                  <div className="h-[154px] w-[154px] rounded-[76px] bg-gradient1 blur-[56px] backdrop-opacity-[0.5]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-center justify-center gap-4 p-[18px]">
                  <Img
                    src="order.jpg"
                    width={40}
                    height={100}
                    alt="Contrast Image"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col gap-[22px] self-stretch">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-center text-[24px] font-medium leading-[29px] text-gray-900_01 md:text-[22px]"
                    >
                      Order Your Food
                    </Text>
                    <Text
                      as="p"
                      className="text-center font-manrope text-[16px] font-normal leading-[22px] tracking-[-0.75px] text-blue_gray-400"
                    >
                      Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.
                    </Text>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-[38px] h-[200px] w-px bg-gray-200" />

              {/* Feature 2 */}
              <div className="relative h-[304px] w-[82%] self-center md:h-auto">
                <div className="mt-10 flex flex-1 justify-center p-5">
                  <div className="h-[154px] w-[154px] rounded-[76px] bg-gradient1 blur-[56px] backdrop-opacity-[0.5]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-4">
                  <Img
                    src="prepare.jpg"
                    width={38}
                    height={36}
                    alt="Lock Image"
                    className="mt-5 h-[60px]"
                  />
                  <div className="flex flex-col gap-6 self-stretch">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-center text-[24px] font-medium leading-[140%] text-gray-900_01 md:text-[22px]"
                    >
                      Oder Preparing
                    </Text>
                    <Text
                      size="texts"
                      as="p"
                      className="text-center font-manrope text-[16px] font-normal leading-[150%] text-blue_gray-400"
                    >
                      Stay connected anytime, anywhere with our robust and reliable network infrastructure, connected anytime, anywhere with ensuring uninterrupted communication and effortless access to the digital world.
                    </Text>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-[38px] h-[200px] w-px bg-gray-200" />

              {/* Feature 3 */}
              <div className="relative h-[304px] w-[30%] md:h-auto md:w-full">
                <div className="mt-10 flex flex-1 justify-center p-5">
                  <div className="h-[154px] w-[154px] rounded-[76px] bg-gradient1 blur-[56px] backdrop-opacity-[0.5]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-4 py-5">
                  <Img
                    src="delivery.jpg"
                    width={34}
                    height={36}
                    alt="Thumbs Up Image"
                    className="h-[36px]"
                  />
                  <div className="flex flex-col gap-6 self-stretch">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-center text-[24px] font-medium leading-[140%] text-gray-900_01 md:text-[22px]"
                    >
                      Healthy Meal Delivery
                    </Text>
                    <Text
                      size="texts"
                      as="p"
                      className="text-center font-manrope text-[16px] font-normal leading-[150%] text-blue_gray-400"
                    >
                      Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            {/* <div className="flex items-center gap-6">
              <Button
                shape="round"
                className="min-w-[138px] rounded-[16px] px-[30px] font-medium tracking-[-0.96px] sm:px-5"
              >
                Contact Us
              </Button>
              <div className="flex items-center gap-2">
                <Link href="#">
                  <Text size="texts" as="p" className="text-[16px] font-normal text-gray-900_01">
                    View All
                  </Text>
                </Link>
                <Img src="img_icon.svg" width={24} height={24} alt="Icon Image" className="h-[24px]" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}