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
      clientImage: "special_menu/muscle_gain.jpg",
      testimonial:
        "1. Increase Protein Intake: Include high-quality proteins like chicken, fish, eggs, tofu, Greek yogurt, lentils, and protein shakes to support muscle repair and growth. Aim for 1.6-2.2 grams of protein per kilogram of body weight daily.<br/> 2. Focus on Complex Carbohydrates: Eat whole grains (brown rice, oats, quinoa), sweet potatoes, and legumes to provide energy for workouts and muscle recovery. <br/> 3. Healthy Fats: Include sources like avocado, nuts, seeds, olive oil, and fatty fish (salmon) to support hormone production and provide calorie-dense nutrition.<br/>4. Eat Frequent Meals: Space meals every 3-4 hours to keep your body fueled and provide a steady supply of nutrients for muscle repair.",
      clientName: "Muscle gain",
      clientRole: "Tips for muscle gain:",
    },
    {
      clientImage: "special_menu/diabetes.jpg",
      testimonial:
        "1. Choose low-GI foods: Foods like lentils, quinoa, oats, and most non-starchy vegetables release glucose slowly.<br/> 2. Include fiber: Aim for at least 25-30g of fiber daily from vegetables, fruits (berries, apples), legumes, and whole grains.<br/> 3. Healthy fats: Include nuts, seeds, olive oil, and fatty fish to improve heart health.<br/> 4. Avoid refined carbs and sugars: Limit white bread, pasta, sugary drinks, and desserts.",
      clientName: "Diabetes",
      clientRole: "Key Tips for Managing Diabetes Through Diet",
    },
    {
      clientImage: "special_menu/pcod.jpg",
      testimonial:
        "1. Avoid refined carbs and sugars: Replace white bread, pastries, and sugary drinks with whole grains and natural sweeteners like stevia.<br/> 2. Focus on low-GI foods: Foods that release glucose slowly (like oats, quinoa, and legumes) help stabilize insulin.<br/> 3. Include anti-inflammatory foods: Fatty fish, nuts, seeds, turmeric, and green leafy vegetables.</br> 4. Limit dairy if sensitive: Substitute with almond or coconut milk to reduce potential inflammation.",
      clientName: "PCOD",
      clientRole: "Tips for Managing PCOD Through Diet",
    },
    {
      clientImage: "special_menu/pcod.jpg",
      testimonial:
        "1. Increase Anti-Inflammatory Foods: Include fatty fish (salmon, mackerel), nuts, seeds, ginger, turmeric, and leafy greens to reduce inflammation.<br/> 2. Consume Magnesium-Rich Foods: Opt for avocados, bananas, almonds, cashews, and spinach to relax muscles and ease cramps.<br/> 3. Focus on Calcium and Vitamin D: Eat dairy (or alternatives like almond milk), tofu, broccoli, and sesame seeds to support muscle relaxation and hormonal balance.<br/> 4. Opt for Complex Carbs and Fiber: Choose whole grains, sweet potatoes, and legumes to stabilize blood sugar and prevent energy crashes.<br/> 5. Avoid Processed Foods and Sugars: Reduce intake of refined carbs, sugary snacks, and processed foods to minimize inflammation and bloating.",
      clientName: "Period cramp",
      clientRole: "Dietary tips to manage period cramp pain",
    },
    {
      clientImage: "special_menu/weight_loss.jpg",
      testimonial:
        "1. Focus on High-Protein Meals: Include lean proteins like chicken, fish, eggs, tofu, and legumes to boost metabolism and keep you feeling full.<br/> 2. Increase Fiber Intake: Eat plenty of vegetables, fruits (like berries), whole grains, and seeds to promote satiety and support digestion.<br/> 3. Limit Refined Carbs and Sugars: Replace white bread, pasta, and sugary snacks with whole grains like quinoa, oats, and brown rice.<br/> 4. Practice Portion Control: Use smaller plates, measure portions, and avoid overeating by listening to your body's hunger cues.<br/> 5. Incorporate Healthy Fats: Add moderate amounts of avocado, nuts, seeds, and olive oil to meals for better satiety and hormone regulation.",
      clientName: "Weight loss",
      clientRole: "Dietary tips for weight loss",
    },
  ];
  return (
    <>
      <div id="blog" className="flex flex-col items-center justify-center min-h-screen">
        <div className="container-xs flex flex-col items-center h-[90vh] gap-2.5 ">
          <div className="flex w-[80%] py-5 flex-col items-center gap-2.5 md:w-full">
            <Heading
              as="p"
              className="text-[48px] font-montserrat4 tracking-[-1.83px] md:text-[44px] sm:text-[38px]"
            >
              Key Tips For Managing Health Through Diet
            </Heading>
          </div>

          {/* Slider Section */}
          <div className="flex flex-col gap-[50px] self-stretch">
            <div className="relative h-[80vh] content-start md:h-auto">
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
                      <div className="flex gap-[46px] rounded-[32px] border border-solid border-blue_gray-50 bg-white-a700 p-6 md:flex-col sm:p-5">
                        <Img
                          src={slide.clientImage}
                          width={494}
                          height={334}
                          alt="Client Image"
                          className="mb-5 mt-10 h-[334px] w-[52%] rounded-[16px] object-contain md:w-full"
                        />
                        <div className="flex w-[46%] flex-col mt-10 items-end gap-3.5 md:w-full">
                          <div className="flex flex-col gap-2 self-stretch">
                            <div className="flex gap-2 flex-col items-start">
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[28px] font-montserrat5 tracking-[-0.96px] md:text-[22px]"
                              >
                                {slide.clientName}
                              </Text>
                              <Heading
                                size="textmd"
                                as="h1"
                                className="text-[20px] font-montserrat4 tracking-[-0.96px]"
                              >
                                {slide.clientRole}
                              </Heading>
                            </div>

                            <Text
                              size="texts"
                              as="p"
                              className="text-[16px] font-montserrat3 leading-[19px] tracking-[0.96px]"
                              dangerouslySetInnerHTML={{
                                __html: slide.testimonial,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>

              {/* Slider Navigation Buttons */}
              <div className="absolute bottom-[100px] left-0 right-0 mx-11 flex flex-1 justify-end gap-[11px] md:mx-0">
                <Button
                  color="deep_purple_400_a2"
                  size="md"
                  variant="outline"
                  onClick={() => {
                    sliderRef?.current?.slidePrev();
                  }}
                  className="w-[54px] rounded-[26px] !border px-4"
                >
                  <Img
                    src="img_arrow_right_deep_purple_a200.svg"
                    width={20}
                    height={20}
                  />
                </Button>

                <Button
                  color="deep_purple_400_a2"
                  size="md"
                  onClick={() => {
                    sliderRef?.current?.slideNext();
                  }}
                  className="w-[54px] rounded-[26px] px-4"
                >
                  <Img
                    src="img_arrow_right_white_a700.svg"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
