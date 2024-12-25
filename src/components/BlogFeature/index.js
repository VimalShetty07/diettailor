"use client";

import Link from "next/link";

import Button from "../Button";
import Img from "../Img";
import Text from "../Text";
import { Heading } from "@/components/Heading";
import React from "react";

export default function BlogFeature({
  image="img_blogs_featured_image.png",
  healthcareButton = "Healthcare",
  aiFutureText = "The Future of AI in Healthcare: Transforming Patient Care",
  descriptionText =
    "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
  readMoreLink = "Read more",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center w-[32%] md:w-full p-[18px] border-blue_gray-50 border border-solid bg-white-a700 rounded-[16px]`}
    >
      <div className="self-stretch">
        <div className="flex flex-col items-start gap-5">
          <Img
            src={image}
            width={292}
            height={220}
            alt="Featured Image"
            className="h-[220px] w-full rounded-lg object-cover"
          />
          <Button
            color="deep_purple_A100_01"
            size="xs"
            shape="round"
            className="min-w-[96px] rounded-[14px] px-1.5 font-manrope tracking-[-0.75px]"
          >
            {healthcareButton}
          </Button>
          <div className="flex flex-col gap-3.5 self-stretch">
            <Heading
              size="textmd"
              as="p"
              className="text-[20px] font-montserrat3 leading-6 tracking-[-0.75px] text-gray-900"
            >
              {aiFutureText}
            </Heading>
            <Text
              size="texts"
              as="p"
              className="text-[16px] font-montserrat1 leading-[19px] tracking-[-0.20px] tracking-[-0.96px]"
            >
              {descriptionText}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
