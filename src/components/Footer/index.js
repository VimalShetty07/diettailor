import Img from "../Img";
import Text from "../Text";import Link from "next/link";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex self-stretch bg-primary-purple_normal`}
    >
      <div className="h-[264px] w-full bg-[url(/images/img_footer_logo.png)] bg-cover bg-no-repeat p-[54px] md:h-auto md:p-5">
        <div className="mt-[54px] flex flex-col gap-14 sm:gap-7">
          <div className="flex items-start justify-between gap-5 sm:flex-col">
            <Img
              src="img_footer_logo.png"
              width={172}
              height={28}
              alt="Footer Logo"
              className="h-[28px] w-[172px] self-center object-contain"
            />
            <ul className="flex flex-wrap gap-5">

              <li>
                <Text
                  as="p"
                  className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700_cc"
                >
                  <Link href="Pricing" target="_blank" rel="noreferrer">
                    About
                  </Link>
                </Text>
              </li>
              <li>
                <Text
                  as="p"
                  className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700_cc"
                >
                  <Link href="Blogs" target="_blank" rel="noreferrer">
                    Services
                  </Link>
                </Text>
              </li>
              <li>
                <Text
                  as="p"
                  className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700_cc"
                >
                  <Link href="Careers" target="_blank" rel="noreferrer">
                    How it works
                  </Link>
                </Text>
              </li>
              <li>
                <Text
                  as="p"
                  className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700_cc"
                >
                  <Link href="About" target="_blank" rel="noreferrer">
                    Fodd menu
                  </Link>
                </Text>
              </li>
              <li>
                <Text
                  as="p"
                  className="font-manrope text-[16px] font-normal tracking-[-0.75px] text-white-a700_cc"
                >
                  <Link href="#">Contact Us</Link>
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex justify-between gap-5">
            <Text
              size="textxs"
              as="p"
              className="font-manrope text-[12px] font-normal tracking-[0.25px] text-white-a700_cc"
            >
              © 2023 Diet Tailor. All rights reserved.
            </Text>
            <div className="flex gap-5">
              <Img
                src="img_trash.svg"
                width={18}
                height={16}
                alt="Trash Icon"
                className="h-[16px]"
              />
              <Img
                src="img_facebook.svg"
                width={16}
                height={16}
                alt="Facebook Icon"
                className="h-[16px]"
              />
              <Img
                src="img_link.svg"
                width={16}
                height={16}
                alt="LinkedIn Icon"
                className="h-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
