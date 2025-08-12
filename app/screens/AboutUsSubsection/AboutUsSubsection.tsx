import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function AboutUsSubsection   () {
  // Quality Professionals text arranged in a circle

  return (
    <section className="relative w-full pt-[200px] pb-10 px-[150px] max-[1780px]:px-[100px] max-[1500px]:px-[50px] max-[1000px]:px-[25px] max-[1500px]:pt-[120px]  max-[1300px]:pt-[60px] max-[1000px]:pt-[40px]">
        {/* Background gradient circle */}
        <div className="absolute w-[1000px] h-[1000px] right-[-200px] top-[-300px] rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(59,147,118,0.38)_0%,rgba(59,147,118,0)_100%)] opacity-60" />

        <div className="flex items-center justify-between gap-[92px] w-full max-[1100px]:flex-col max-[1100px]:gap-[20px] ">
          {/* Left side with image and quality badge */}
          <div className="relative w-full max-w[865px] h-auto max-[1500px]:max-w-[665px] max-[1100px]:max-w-[100%]">
                   <img src="/about-img.png" className="w-full h-full object-contain " alt="" />
          </div>

          {/* Right side with text content */}
          <Card className="w-full max-w-[596px]  max-[1300px]:max-w-[100%] border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <h2 className="max-[1300px]:pt-[30px] font-['Figtree'] font-bold text-[72px] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] max-[1100px]:text-[36px] max-[1000px]:leading-[46px] max-[500px]:text-[28px] max-[500px]:leading-[38px]   leading-[82px] text-[#083124] tracking-[0]">
                About Us
              </h2>

              <h3 className="mt-4 font-['Figtree'] font-semibold text-[32px] max-[1000px]:text-[24px] max-[500px]:text-[22px] max-[500px]:leading-[32px] max-[500px]:mt-2   max-[1000px]:leading-[32px] leading-[50px] text-[#083124] tracking-[0]">
                PRO HEALTH
              </h3>

              <div className="mt-[124px] max-[1300px]:mt-[76px] max-[1100px]:mt-[26px] flex item-start">
                   <img src="/black-right-arrow.png" className="w-[35px] h-[24px] mt-[10px] max-[1000px]:h-[15px] max-[1000px]:w-[25px]" alt="" />
                <p className="pl-[29px] font-['Figtree'] font-normal text-[#08312485] text-[32px] max-[1000px]:text-[24px] max-[500px]:text-[22px] max-[500px]:leading-[32px]   max-[1100px]:leading-[32px] tracking-[0] leading-[42px]">
                  ProHealth is a team of experienced medical professionals
                </p>
              </div>

              <p className="mt-8 pl-16 max-[1300px]:mt-5 max-[1100px]:pl-14 font-['Poppins'] text-xl leading-[26px] font-normal max-[1000px]:text-[18px] max-[500px]:text-[14px] max-[500px]:leading-[20px]   text-[#08312485] ">
                Dedicated to providing top-quality healthcare services. We
                believe in a holistic approach to healthcare that focuses on
                treating the whole person, not just the illness or symptoms. 
              </p>
            </CardContent>
          </Card>
        </div>
    </section>
  );
};
