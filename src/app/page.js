import Button from "../components/Button";
import Img from "../components/Img";
import Text from "../components/Text";
import Header from "@/components/header"
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import CallToActionSection from "./CallToActionSection";
import React, { Suspense } from "react";
import BlogFeature from "@/components/BlogFeature";
import Link from "next/link";
import TestimonialsSection from "./TestimonialsSection";
import ServicesSection from "./ServicesSection";
import ClientShowcaseSection from "./ClientShowcaseSection";
import MissionStatementSection from "./MissionStatementSection";
import FeaturesSection from "./FeaturesSection";


const featuredBlogsList = [
  {
    healthcareButton: "Healthy Food Delivery",
    aiFutureText: "Revolutionizing Your Meal Experience",
    descriptionText:
    "Discover the convenience and benefits of healthy food delivery right at your doorstep. Learn how our service offers fresh, balanced meals tailored to your dietary needs, helping you maintain a healthy lifestyle without the hassle of cooking. Explore the future of nutritious meal delivery, providing you with the best options for your health goals",
    image: "health.webp",
  },
  {
    healthcareButton: "Consultation",
    aiFutureText: "Personalized Guidance for Your Wellness Journey",
    descriptionText:
    "Unlock the power of personalized nutrition through expert consultations. Our team of nutritionists and dietitians will guide you on the best dietary choices tailored to your unique health goals. Learn how personalized advice can transform your health and empower you to live a better, balanced life.",
    image: "consult.webp",
  },
  {
    healthcareButton: "Monthly Meals Plan",
    aiFutureText: "Tailored Monthly Meal Plans for Optimal Health",
    descriptionText:
    "Discover how a personalized monthly meal plan can transform your health journey. Our tailored meals are designed to meet your specific nutritional needs, promoting better energy levels, weight management, and overall well-being. Enjoy the convenience of healthy, balanced meals delivered right to your door, with options that cater to various dietary preferences and lifestyles. Let us help you stay on track with your health goals, one meal at a time.",
    image: "personal.webp",
  },
];


export default function Page() {
  return <div className="w-full">
  <div className="flex flex-col items-center gap-[100px] bg-background-white md:gap-[75px] sm:gap-[50px] w-[90vw] mx-auto">
    <div className="container-xs mt-3.5">
      <div className="flex flex-col gap-24 sm:gap-8">
        <Header />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-5">
              <Text
                size="text2xl"
                as="p"
                className="self-stretch text-center text-[72px] font-normal leading-[87px] tracking-[-3.83px] text-gray-900_01 md:text-[48px]"
              >
                Innovate your meal, Elevate your Life!!!
              </Text>
              <Text as="p" className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-blue_gray-400">
                Welcome to Diet Tailor
              </Text>
              {/* <div className="flex gap-3.5">
                <Button
                  color="gray_900_01"
                  shape="round"
                  className="min-w-[108px] rounded-[16px] px-[30px] tracking-[-0.96px] sm:px-5"
                >
                  Signup
                </Button>
                <Button shape="round" className="min-w-[136px] rounded-[16px] px-[30px] tracking-[-0.96px] sm:px-5">
                  Contact Us
                </Button>
              </div> */}
            </div>
            <Img
              src="plate.png"
              width={1058}
              height={388}
              alt="Hero Image"
              className="h-[388px] rounded-[194px] object-cover"
            />
          </div>
        </div>
      </div>
      <MissionStatementSection/>
      <FeaturesSection/>
      {/* <ClientShowcaseSection/> */}
      {/* <ServicesSection/> */}
      {/* <TestimonialsSection/> */}
      <div className="container-xs md:px-5">
      <div className="flex flex-col items-center gap-[30px]">
        <div className="relative h-[30px] w-[6%] content-center rounded-[14px] border border-solid border-deep_purple-50_01 bg-gradient md:h-auto">
          <Img
            src="img_noise_30x60.png"
            width={60}
            height={30}
            alt="Noise Image"
            className="h-[30px] flex-1 object-cover opacity-50"
          />
          <Text
            as="p"
            className="absolute bottom-0 right-[8.50px] top-0 my-auto h-max font-manrope text-[16px] font-normal tracking-[-0.75px] text-primary-purple_normal"
          >
            Services
          </Text>
        </div>
        <div className="flex flex-col items-center gap-6 self-stretch">
          <Heading
            as="p"
            className="text-[48px] font-normal tracking-[-3.83px] text-gray-900_01 md:text-[44px] sm:text-[38px]"
          >
            Explore Our Services to Elevate Your Health and Wellness
          </Heading>
          <div className="flex gap-[30px] self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {featuredBlogsList.map((d, index) => (
                <BlogFeature {...d} key={"blogsList" + index} />
              ))}
            </Suspense>
          </div>
          {/* <div className="flex items-center gap-6">
            <Button
              shape="round"
              className="min-w-[138px] rounded-[16px] px-[30px] font-medium tracking-[-0.96px] sm:px-5"
            >
              Contact Us
            </Button>
            <div className="flex items-center gap-2">
              <Link href="#">
                <Text
                  size="texts"
                  as="p"
                  className="text-[16px] font-normal text-gray-900_01"
                >
                  View All
                </Text>
              </Link>
              <Img
                src="img_icon.svg"
                width={24}
                height={24}
                alt="View Icon"
                className="h-[24px]"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>

      <CallToActionSection />
      <Footer/>

    </div>
  </div>
</div>

}