import Button from "../components/Button";
import Img from "../components/Img";
import Text from "../components/Text";
import Header from "@/components/header";
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
    healthcareButton: "Customized Meal Box",
    aiFutureText: "Revolutionizing Your Meal Experience",
    descriptionText:
      "Discover the convenience and benefits of healthy food delivery right at your doorstep. Learn how our service offers fresh, balanced meals tailored to your dietary needs, helping you maintain a healthy lifestyle without the hassle of cooking. Explore the future of nutritious meal delivery, providing you with the best options for your health goals",
    image: "consult/meal_delivery.jpg",
  },
  {
    healthcareButton: "Pesonal Consultation",
    aiFutureText: "Personalized Guidance for Your Wellness Journey",
    descriptionText:
      "Unlock the power of personalized nutrition through expert consultations. Our team of nutritionists and dietitians will guide you on the best dietary choices tailored to your unique health goals. Learn how personalized advice can transform your health and empower you to live a better, balanced life.",
    image: "consult/consult.jpg",
  },
  {
    healthcareButton: "Monthly Meals Plan",
    aiFutureText: "Tailored Monthly Meal Plans for Optimal Health",
    descriptionText:
      "Discover how a personalized monthly meal plan can transform your health journey. Our tailored meals are designed to meet your specific nutritional needs, promoting better energy levels, weight management, and overall well-being.",
    image: "consult/monthly_meal.jpg",
  },
];

export default function Page() {
  return (
    <div className="w-full">
      <div
      id="home"
        className=" flex flex-col gap-20 h-[100vh] text-white sm:gap-8"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col pt-20 mt-8 items-center gap-5">
              <Text
                size="text2xl"
                as="p"
                className="self-stretch text-center tracking-wider text-[80px] leading-[87px] font-montserrat4 tracking-[-3.83px] !text-[#ffffff] md:text-[48px]"
              >
                Diet Tailor
              </Text>
              <Text
                as="p"
                className="text-[36px] tracking-widest font-montserrat1 tracking-[-0.75px] !text-[#ffffff]"
              >
                Innovate your meal, Elevate your Life!!!
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px] w-[90vw] mx-auto">
        <div className="container-xs  mt-3.5">
          <MissionStatementSection />
          <div id="services" className="container-xs h-[80vh] md:px-5">
            <div className="flex flex-col items-center gap-[30px]">
              
              <div className="flex flex-col items-center gap-6 self-stretch">
                <Heading
                  as="p"
                  className="text-[48px] font-montserrat3 tracking-[-2.83px] md:text-[44px] sm:text-[38px]"
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
              </div>
            </div>
          </div>
          
         
          {/* <FeaturesSection /> */}
          <TestimonialsSection />
          {/* <ServicesSection /> */}
          <CallToActionSection />
          {/* <ClientShowcaseSection/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
