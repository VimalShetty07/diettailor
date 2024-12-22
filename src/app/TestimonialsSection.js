"use client";
import Img from "@/components/Img";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Slider } from "@/components/Slider";
import React from "react";

export default function TestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Slider content data
  const sliderContent = [
    {
      clientImage: "img_client_image.png",
      testimonial:
        "I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our business operations, streamlining processes and boosting productivity. The seamless connectivity and intuitive user interface have made a significant impact on our team's efficiency. Thanks to their advanced data analytics capabilities, we now make data-driven decisions with confidence. I highly recommend FutureSphere to any organization seeking to stay ahead in the digital era.",
      clientName: "Sarah Thompson",
      clientRole: "CEO Thompson Enterprises",
    },
    {
      clientImage: "img_client_image.png",
      testimonial:
        "FutureSphere has truly redefined the way we approach technology. Their innovative solutions have allowed us to automate key processes and improve overall efficiency. The user interface is intuitive and easy to navigate, and their customer support is exceptional. We’ve seen measurable improvements in productivity, and I can confidently say that FutureSphere has played a key role in our success.",
      clientName: "John Davis",
      clientRole: "CTO Global Tech Solutions",
    },
    {
      clientImage: "img_client_image.png",
      testimonial:
        "Partnering with FutureSphere has been one of the best business decisions we’ve made. Their advanced AI-powered solutions have streamlined our operations and provided us with valuable insights that were previously inaccessible. Their team is highly skilled and responsive, ensuring smooth implementation and ongoing support. I would highly recommend FutureSphere to any company looking to innovate and grow.",
      clientName: "Emily Roberts",
      clientRole: "Founder & CEO InnovateX",
    },
  ];

  return (
    <>
      {/* Testimonials Section (Full Page) */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="container-xs flex flex-col items-center gap-2.5 px-5">
          <div className="flex w-[42%] flex-col items-center gap-2.5 md:w-full">
            <div className="relative h-[30px] w-[60%] content-center rounded-[14px] border border-solid border-deep_purple-50_01 bg-gradient md:h-auto">
              <Text
                as="p"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max font-manrope text-[16px] font-normal tracking-[-0.75px] text-primary-purple_normal"
              >
                Blockbuster Meal Menu
              </Text>
            </div>

            <Heading
              as="p"
              className="text-[48px] font-normal tracking-[-3.83px] text-gray-900_01 md:text-[44px] sm:text-[38px]"
            >
              Nutritious Meal Options
            </Heading>
          </div>

          {/* Slider Section */}
          <div className="flex flex-col gap-[50px] self-stretch">
            <div className="relative h-[446px] content-center md:h-auto">
              <div className="mx-auto flex w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    551: { items: 1 },
                    1051: { items: 1 },
                  }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={sliderContent.map((slide, index) => (
                    <React.Fragment key={index}>
                      <div className="flex items-end gap-[46px] rounded-[32px] border border-solid border-blue_gray-50 bg-white-a700 p-6 md:flex-col sm:p-5">
                        <Img
                          src={slide.clientImage}
                          width={494}
                          height={334}
                          alt="Client Image"
                          className="mb-5 mt-10 h-[334px] w-[52%] rounded-[16px] object-contain md:w-full"
                        />
                        <div className="flex w-[46%] flex-col items-end gap-3.5 md:w-full">
                          <div className="flex flex-col gap-4 self-stretch">
                            <Text
                              size="texts"
                              as="p"
                              className="text-[16px] font-normal leading-[19px] tracking-[-0.96px] text-blue_gray-400"
                            >
                              {slide.testimonial}
                            </Text>
                            <div className="flex flex-col items-start">
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[24px] font-normal tracking-[-0.96px] text-gray-900_01 md:text-[22px]"
                              >
                                {slide.clientName}
                              </Text>
                              <Heading
                                size="textmd"
                                as="h1"
                                className="text-[20px] font-normal tracking-[-0.96px] text-gray-900_01"
                              >
                                {slide.clientRole}
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>

              {/* Slider Navigation Buttons */}
              <div className="absolute bottom-[26px] left-0 right-0 mx-11 flex flex-1 justify-end gap-[11px] md:mx-0">
                <Button
                  color="deep_purple_400_a2"
                  size="md"
                  variant="outline"
                  onClick={() => {
                    sliderRef?.current?.slidePrev();
                  }}
                  className="w-[54px] rotate-[-180deg] rounded-[26px] !border px-4"
                >
                  <Img src="img_arrow_right_deep_purple_a200.svg" width={20} height={20} />
                </Button>

                <Button
                  color="deep_purple_400_a2"
                  size="md"
                  onClick={() => {
                    sliderRef?.current?.slideNext();
                  }}
                  className="w-[54px] rounded-[26px] px-4"
                >
                  <Img src="img_arrow_right_white_a700.svg" width={20} height={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}