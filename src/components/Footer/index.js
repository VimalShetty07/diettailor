import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-12 py-10 h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 text-left">
          {/* Main Footer Sections */}
          <div className="flex justify-between flex-wrap gap-12 mb-12">
            <FooterSection
              title="ABOUT Diet Tailor"
              links={[
                {
                  title: "Who Are We",
                  href: "#about",
                },
                { title: "Our Services", href: "#services" },
                {
                  title: "Blog",
                  href: "#blog",
                },
                {
                  title: "Work With Our Services",
                  href: "",
                },
              ]}
            />
            <FooterSection
              title="Diet Tailor Is Available On"
              links={[
                { title: "Zomato", href: "https://www.zomato.com/" },
                { title: "Blinkit", href: "https://blinkit.com/" },
                { title: "Swiggy", href: "https://swiggy.com/" },
                
              ]}
            />
            <FooterSection
              title="FOR RESTAURANTS"
              links={[
                {
                  title: "Partner With Us",
                  href: "https://www.zomato.com/partner-with-us",
                },
                {
                  title: "Apps For You",
                  href: "https://play.google.com/store/apps",
                },
              ]}
            />
            <FooterSection
              title="LEARN MORE"
              links={[
                {
                  title: "Privacy",
                  href: "",
                },
                {
                  title: "Security",
                  href: "",
                },
                {
                  title: "Terms",
                  href: "",
                },
              ]}
            />

            {/* Social and App Store Section */}
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="text-sm font-bold mb-4">SOCIAL LINKS</h4>
                <div className="flex gap-2 mb-6">
                  <SocialIcon
                    href="https://linkedin.com/"
                    src="/images/social-media/linkedin.png"
                    alt="LinkedIn"
                  />
                  <SocialIcon
                    href="https://youtube.com/"
                    src="/images/social-media/youtube.png"
                    alt="YouTube"
                  />
                  <SocialIcon
                    href="https://facebook.com/"
                    src="/images/social-media/facebook.png"
                    alt="Facebook"
                  />
                  <SocialIcon
                    href="https://twitter.com/"
                    src="/images/social-media/twitter.png"
                    alt="Twitter"
                  />
                  <SocialIcon
                    href="https://instagram.com/"
                    src="/images/social-media/instagram.png"
                    alt="Instagram"
                  />
                </div>
              </div>

              {/* Play Store and App Store (Stacked) */}
              <div className="flex flex-col items-start gap-4">
                <Link href="https://play.google.com" target="_blank">
                  <Image
                    src="/images/social-media/play_store.webp"
                    alt="Play Store"
                    width={140}
                    height={45}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href="https://www.apple.com/app-store/" target="_blank">
                  <Image
                    src="/images/social-media/app_store.webp"
                    alt="App Store"
                    width={140}
                    height={45}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-8" />

        {/* Copyright */}
        <div className="text-left text-gray-600 text-sm">
          <p className="font-montserrat2">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. © Diet Tailor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Footer Section Component
const FooterSection = ({ title, links }) => (
  <div className="">
    <h4 className="text-sm font-bold tracking-wide mb-4">{title}</h4>
    {links.map((link, index) => (
      <FooterLink key={index} title={link.title} href={link.href} />
    ))}
  </div>
);

// Footer Link Component
const FooterLink = ({ title, href }) => (
  <p className="mb-2 font-montserrat2 text-sm">
    <Link href={href} className="text-gray-700 hover:underline">
      {title}
    </Link>
  </p>
);

// Social Icon Component
const SocialIcon = ({ href, src, alt }) => (
  <Link href={href} target="_blank">
    <Image
      src={src}
      alt={alt}
      width={23}
      height={23}
      className="cursor-pointer"
    />
  </Link>
);

export default Footer;