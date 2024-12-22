"use client";
import Button from "@/components/Button";
import Img from "@/components/Img";
import Text from "@/components/Text";
import { Slider } from "@/components/Slider";
import React from "react";

export default function ServicesSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* Services Section */}
      
      <div className="relative h-[478px] content-center self-stretch md:h-auto">
        <div className="container-xs mx-auto flex w-full md:px-5">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex items-center gap-[42px] rounded-[32px] border border-solid border-blue_gray-50 bg-white-a700 px-5 py-9 md:flex-col sm:py-5">
                  
                  {/* Text Section */}
                  <div className="flex flex-1 flex-col gap-[22px] md:self-stretch">
                    <div className="flex flex-col items-start gap-5">
                      {/* Services Tag */}
                      <div className="relative h-[30px] w-[18%] content-center rounded-[14px] border border-solid border-deep_purple-50_01 bg-gradient md:h-auto">
                        <Img
                          src="img_noise_30x92.png"
                          width={92}
                          height={30}
                          alt="Noise Image"
                          className="h-[30px] flex-1 object-cover opacity-50"
                        />
                        <Text
                          as="p"
                          className="absolute bottom-0 right-[11.89px] top-0 my-auto h-max font-manrope text-[16px] font-normal tracking-[-0.75px] text-primary-purple_normal"
                        >
                          Services
                        </Text>
                      </div>

                      {/* Title */}
                      <Text
                        size="textxl"
                        as="p"
                        className="w-full text-[36px] font-normal leading-[43px] tracking-[-0.96px] text-deep_purple-a200 md:text-[34px] sm:text-[32px]"
                      >
                        Streamlined Business Operations
                      </Text>

                      {/* Description */}
                      <Text
                        size="texts"
                        as="p"
                        className="w-full text-[16px] font-normal leading-[19px] tracking-[-0.96px] text-blue_gray-400"
                      >
                        Our technology solutions streamline and optimize business operations,
                        automating processes, enhancing efficiency, and improving overall productivity.
                        From seamless inventory management to streamlined customer relationship management,
                        our solutions empower businesses to operate at their peak potential, saving time and resources
                        while maximizing profitability.
                      </Text>
                    </div>

                    <div className="h-[54px]" />
                  </div>

                  {/* Image Section */}
                  <Img
                    src="img_image_404x470.png"
                    width={470}
                    height={404}
                    alt="Main Image"
                    className="h-[404px] w-[48%] object-contain md:w-full"
                  />
                </div>
              </React.Fragment>
            ))}
          />
        </div>

        {/* Slider Navigation Buttons */}
        <div className="absolute bottom-[13%] left-0 right-0 mx-auto flex gap-[11px]">
          <Button
            color="deep_purple_400_a2"
            size="md"
            variant="outline"
            onClick={() => {
              sliderRef?.current?.slidePrev();
            }}
            className="w-[54px] rotate-[-180deg] rounded-[26px] !border px-3.5"
          >
            <Img src="img_arrow_right.svg" width={20} height={20} />
          </Button>

          <Button
            color="deep_purple_400_a2"
            size="md"
            onClick={() => {
              sliderRef?.current?.slideNext();
            }}
            className="w-[54px] rounded-[26px] px-3.5"
          >
            <Img src="img_arrow_right_white_a700.svg" width={20} height={20} />
          </Button>
        </div>
      </div>
    </>
  );
}