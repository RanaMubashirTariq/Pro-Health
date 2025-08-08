import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function CtaSubsection  () {
  return (
    <section className="relative w-full h-[609px] py-16 px-[150px] max-[1780px]:px-[100px]  max-[1500px]:px-[50px] max-[1000px]:px-[25px] max-[1000px]:py-[40px]  ">
      <Card className="relative h-[450px] max-[1600px]:h-[400px]  max-[1000px]:h-[300px] max-[767px]:h-auto max-[400px]:h-auto   overflow-hidden border-none bg-custom-gradient">
                   <img src="/reactangle.svg" className="absolute top-0 -left-[90px] w-[1515x] h-[450px]  max-[767px]:w-[100%] max-[767px]:h-[100%] max-[767px]:-left-0 object-cover" alt="" />
                   <img src="/vector-4.svg" className="absolute -top-[100px] -right-[283px] max-[1100px]:-right-[450px] w-[623px] h-[655px] z-0 object-cover max-[767px]:hidden" alt="" />
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full py-[101px] max-[1500px]:py-[70px] pl-[90px] max-[1666px]:px-[50px] max-[1000px]:px-[20px] max-[767px]:pt-[300px] max-[500px]:pt-[180px]   z-10">
              <h2 className="w-[794px]  max-[1500px]:w-[594px]  max-[1200px]:w-[550px] max-[1000px]:w-[400px] max-[767px]:w-[100%] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] max-[1000px]:text-[36px] max-[1000px]:leading-[48px] max-[500px]:text-center  font-['Figtree'] font-bold text-[#083124]  text-7xl tracking-[0] leading-[82px] mb-8 max-[767px]:mb-[20px]">
                Don&apos;t Let Your Health Take a Backseat!
              </h2>
              <p className="w-[471px] max-[500px]:text-center max-[767px]:text-[18px] max-[500px]:leading-[26px] max-[1000px]:w-[400px] max-[767px]:w-[100%] font-['Figtree'] font-medium text-[#083124] text-xl tracking-[0] leading-[30px] mb-8">
                Schedule an appointment with one of our experienced medical
                professionals today!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
              <div className="absolute -top-[180px] right-[167px] w-[546px] h-[750px] max-[1600px]:w-[446px] max-[1600px]:h-[646px] max-[1600px]:-top-[150px] max-[1500px]:right-[100px] max-[1100px]:w-[350px]   max-[1100px]:h-[450px] max-[1000px]:w-[300px]   max-[1000px]:h-[400px]  max-[1100px]:-top-[50px] max-[1100px]:right-[60px] max-[800px]:right-[40px] max-[800px]:w-[260px] max-[767px]:w-[300px] max-[500px]:h-[250px] max-[500px]:h-[250px] max-[340px]:right-[10px]">
              <img
                className="w-full h-full object-cover"
                alt="Medical professional"
                src="/Medicalprofessional.png" // Using placeholder path as the original image URL wasn't provided
              />
            </div>
    </section>
  );
};
