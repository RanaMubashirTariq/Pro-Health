'use client'
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export default function FooterSubsection  () {

           const handleSmoothScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 100, // 100px offset
        behavior: 'smooth'
      });
    }
  };


         const sectionMap: Record<string, string> = {
    "About Us": "#about",
    "Departments": "#departments",
    "Doctors": "#contact", // Assuming doctors are in contact section
    "Timetable": "#contact",
    "Appointment": "#contact",
    "Testimonials": "#testimonials",
    "Blog": "#blog",
    "Contact Us": "#contact",
    "FAQs": "#faq",
    "Privacy Policy": "/privacy", // Will need separate page
    "Terms and Conditions": "/terms" // Will need separate page
  };

  // Navigation links data
  const navLinks1 = [
    "About Us",
    "Departments",
    "Doctors",
    "Timetable",
    "Appointment",
    "Testimonials",
  ];

  const navLinks2 = [
    "Blog",
    "Contact Us",
    "FAQs",
    "Privacy Policy",
    "Terms and Conditions",
  ];

  return (
          <div className="mt-[200px] max-[1500px]:mt-[140px] max-[1000px]:mt-[100px] relative w-full h-[756px] max-[1400px]:h-[950px]   max-[1000px]:h-[890px] max-[767px]:h-[1180px] max-[500px]:h-[1130px] max-[410px]:h-[1150px] max-[350px]:h-[1450px]">
                   <footer className=" w-full  h-[756px] max-[1400px]:h-[1000px]  max-[767px]:h-[1220px] max-[500px]:h-[1080px] max-[350px]:h-[1380px] bg-transparent  pt-[240px] max-[1000px]:pt-[180px]  absolute top-0 left-1/2 -translate-x-1/2 bg-[url('/Vector-8.png')] bg-cover bg-no-repeat bg-center">
                    <img src="/logo-4.png" className="absolute -top-[96px] left-1/2 -translate-x-1/2 w-[258px] h-[279px] object-cover" alt="" />


        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between gap-15 max-[500px]:gap-5 px-[150px] max-[1780px]:px-[100px] max-[1500px]:px-[50px] max-[1000px]:px-[25px] mt-24 max-[1500px]:mt-0">
          {/* Company Info Section */}
          <div className="w-full md:w-[306px] mb-10">
            <h3 className="font-['Poppins'] font-medium text-[#083124] text-xl leading-[30px] mb-[62px] max-[500px]:mb-[20px]">
              ProHealth Medical &amp; Healthcare Center
            </h3>

            <div className="flex items-center gap-5 mb-3">
              <img src='/location.png' className="w-[18px] h-[18px] text-[#083124]" />
              <p className="font-['Poppins'] font-normal text-[#083124] text-base leading-[26px]">
                123 Anywhere St., Any City 12345
              </p>
            </div>

            <div className="flex items-center gap-5 mb-3">
              <img src='/call.png' className="w-[18px] h-[18px] text-[#083124]" />
              <p className="font-['Poppins'] font-normal text-[#083124] text-base leading-[26px]">
                123-456-7890
              </p>
            </div>

            <div className="flex items-center gap-5">
              <img src='/sms.png' className="w-[18px] h-[18px] text-[#083124]" />
              <a
                className="font-['Poppins'] font-normal text-[#083124] text-base leading-[26px]"
                href="mailto:hellocallcenter@prohealth.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                hellocallcenter@prohealth.com
              </a>
            </div>
          </div>

          {/* Navigation Links 1 */}
          <div className="w-full max-w-[110px] md:w-auto mb-10">
      <nav>
        <ul className="font-['Poppins'] font-normal text-[#083124] text-base leading-10">
          {navLinks1.map((link) => (
            <li key={link}>
              <a 
                href={sectionMap[link]} 
                className="hover:underline"
                onClick={(e) => handleSmoothScroll(e, sectionMap[link])}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

          {/* Navigation Links 2 */}
          <div className="w-full max-w-[180px] md:w-auto mb-10">
      <nav>
        <ul className="font-['Poppins'] font-normal text-[#083124] text-base leading-10">
          {navLinks2.map((link) => (
            <li key={link}>
              <a 
                href={sectionMap[link]} 
                className="hover:underline"
                onClick={(e) => handleSmoothScroll(e, sectionMap[link])}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
          {/* Subscription Section */}
          <div className="w-full md:w-[531px] mb-10">
            <h2 className="font-['Figtree'] font-bold text-[#083124] text-[42px] max-[1000px]:text-[32px] max-[1000px]:leading-[42px]  leading-[52px] mb-3">
              Be Our Subscribers
            </h2>
            <p className="font-['Poppins'] font-normal text-[#083124] text-base leading-[26px] mb-6">
              to get the latest news about health from our experts
            </p>

            <Card className="w-full border border-solid border-[#08312480] rounded-[36px] p-0 bg-transparent">
              <div className="flex items-center p-3.5">
                <Input
                  className="flex-1 border-none shadow-none font-['Poppins'] text-base text-[#083124] opacity-60 placeholder:text-[#083124] placeholder:opacity-60 focus-visible:ring-0"
                  placeholder="example@email.com"
                />
                <Button className="w-[163px] h-[50px] max-[500px]:w-[120px] bg-[#083124] rounded-3xl shadow-button-drop-shadow">
                  <span className="font-['Poppins'] font-medium text-white text-base tracking-[0.24px] mr-2">
                    Submit
                  </span>
                  <img
                    className="w-3.5 h-2.5"
                    alt="Vector"
                    src="/right-arrow.png"
                  />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full h-[102px] bg-[#083124] mt-10">
          <div className="flex justify-between items-center max-[767px]:flex-wrap max-[767px]:justify-center h-full px-[150px] max-[1780px]:px-[100px] max-[1500px]:px-[50px] max-[1000px]:px-[25px]">
            <div className="flex items-center gap-6 max-[767px]:justify-center">
              <span className="font-['Inter'] font-normal text-white text-base">
                Follow Us
              </span>
                   <div className="flex justify-between w-[155px] h-5">
                        <img className="w-5 h-5 object-cover" src='/facebook.png' alt="Social media" />
                        <img className="w-5 h-5 object-cover" src='/youtube.png' alt="Social media" />
                        <img className="w-5 h-5 object-cover" src='/twitter.png' alt="Social media" />
                        <img className="w-5 h-5 object-cover" src='/linkedin.png' alt="Social media" />
                        <img className="w-5 h-5 object-cover" src='/instagram.png' alt="Social media" />
                   </div>
            </div>
            <div className="font-['Poppins'] font-normal text-white text-base opacity-50 max-[767px]:text-center">
              Copyright © 2024 Pro Health. All rights reserved.
            </div>
          </div>
        </div>
    </footer>
          </div>
  );
};
