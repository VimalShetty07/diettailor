import Img from "@/components/Img";
import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";
import Image from "next/image";

export default function MissionStatementSection() {
    return (
        <>
            {/* mission statement section */}
            <div id="about" className="flex justify-center self-stretch">
                <div className="container-xs my-5 flex justify-center md:px-5">
                    <div className="flex w-full items-center gap-[30px] rounded-[32px] border border-solid border-blue_gray-50 bg-white-a700 px-5 py-[42px] md:flex-col md:py-5">

                        {/* Left Content */}
                        <div className="flex flex-1 flex-col gap-[38px] md:self-stretch">

                            {/* Heading and Text */}
                            <div className="flex flex-col items-start gap-5">

                                {/* Section Label */}
                                {/* <div className="relative h-[30px] w-[38%] content-center rounded-[14px] border border-solid border-deep_purple-50_01 bg-gradient md:h-auto"> */}
                                    {/* <Img
                                        src="img_noise_30x194.png"
                                        width={194}
                                        height={30}
                                        alt="Noise Image"
                                        className="h-[30px] flex-1 object-cover opacity-50"
                                    /> */}
                                    {/* <Text
                                        as="p"
                                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max font-manrope text-[16px] font-normal tracking-[-0.75px] text-primary-purple_normal"
                                    >
                                        Our Mission Statement
                                    </Text> */}
                                {/* </div> */}

                                {/* Title */}
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="w-full text-[50px] mb-5 tracking-wider font-montserrat4 leading-[43px] tracking-[-0.96px] text-gray-900_01  sm:text-[32px]"
                                >
                                    Who are we?
                                </Text>

                                {/* Description */}
                                <Text
                                    size="texts"
                                    as="p"
                                    className="w-full font-montserrat2 text-[16px] leading-[150%]"
                                >
                                    Introducing Diet Teller, your personalized nutrition partner designed to cater to your unique dietary needs. In today's fast-paced world, most people fall short of meeting their daily nutritional requirements. Whether you’re an active gym-goer or simply striving to maintain a healthy lifestyle, Diet Teller is here to ensure that you reach your nutritional goals effortlessly.

                                    Our program is tailored to fit your lifestyle and preferences, providing balanced, nutrition-packed meals that match your specific requirements. Whether you're looking for a keto diet, high-protein meals, low-fat options, or high-carbohydrate solutions, we’ve got it covered. We also offer plant-based protein meals and meat options to accommodate a wide range of dietary choices.

                                </Text>
                            </div>
                            

                            {/* Call to Action */}
                            {/* <div className="flex items-center gap-4">
                                <Text
                                    size="texts"
                                    as="p"
                                    className="mb-1 self-end text-[16px] font-medium tracking-[-0.96px] text-primary-purple_normal"
                                >
                                    Signup
                                </Text>
                                <Button
                                    shape="round"
                                    className="min-w-[138px] rounded-[16px] px-[30px] font-medium tracking-[-0.96px] sm:px-5"
                                >
                                    Contact Us
                                </Button>
                            </div> */}
                        </div>

                        {/* Hero Image */}
                        <Img
                            src="plate.jpeg"
                            width={486}
                            height={446}
                            alt="Hero Image"
                            className="h-[400px] w-[45%] rounded-[25px] object-contain md:w-full"
                        />
                       
                    </div>
                </div>
            </div>
        </>
    );
}