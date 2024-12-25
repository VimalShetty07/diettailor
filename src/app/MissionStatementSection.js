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
        <div className="container-xs my-10 md:my-5 flex justify-center">
          <div className="flex w-full items-center gap-[30px] rounded-[32px] border border-solid md:border-none px-5 py-[42px] md:flex-col md:py-5">
            {/* Left Content */}
            <div className="flex flex-1 flex-col gap-[38px] md:self-stretch">
              {/* Heading and Text */}
              <div className="flex flex-col items-start gap-5">
                <Text
                  size="textxl"
                  as="p"
                  className="w-full text-[50px] mb-5 md:mb-2 tracking-wider font-montserrat4 leading-[43px] tracking-[-0.96px] sm:text-[32px]"
                >
                  Who are we?
                </Text>

                <Img
              src="plate.jpeg"
              width={486}
              height={446}
              alt="Hero Image"
              className="hidden md:block rounded-[5px] object-contain md:w-full"
            />

                {/* Description */}
                <Text
                  size="texts"
                  as="p"
                  className="w-full font-montserrat2 text-[16px] leading-[150%]"
                >
                  Why can’t we personalize our meals based on macronutrients
                  rather than just ingredients? That’s the question that sparked
                  the creation of Diet Tailor. While most meal services focus on
                  flavors or specific foods, we realized the real need is
                  deeper: personalizing meals to meet your body’s unique
                  nutritional needs, not just your taste preferences. At Diet
                  Tailor, we go beyond the surface to deliver meals designed
                  around the macronutrient balance you need to thrive. Whether
                  you’re aiming for more protein, fewer carbs, or a balanced
                  mix, we create delicious, hassle-free options that align
                  perfectly with your personal health and fitness goals. We’re a
                  team of nutrition enthusiasts, culinary experts, and wellness
                  advocates committed to simplifying healthy living in an
                  affordable way.
                </Text>
              </div>

            </div>

            {/* Hero Image */}
            <Img
              src="plate.jpeg"
              width={486}
              height={446}
              alt="Hero Image"
            //   className="md:hidden w-[40%] rounded-[5px] object-contain"
              className="md:hidden w-[100%] max-w-[486px] rounded-[5px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
