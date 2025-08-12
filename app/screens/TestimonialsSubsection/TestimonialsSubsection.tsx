import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export default function TestimonialsSubsection  () {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "PAULO HUBERT",
      location: "New York, USA",
      active: false,
      position: "top",
    },
    {
      id: 2,
      name: "LAURENCE VENDETTA",
      location: "California, USA",
      active: true,
      position: "middle",
      testimonial:
        "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.",
    },
    {
      id: 3,
      name: "CASSANDRA RAUL",
      location: "Florida",
      active: false,
      position: "bottom",
    },
  ];

  return (
    <section className="w-full max-w-[1630px] mx-[150px] max-[1800px]:mx-0  max-[1780px]:mr-[100px] max-[1500px]:mr-[50px]    max-[1780px]:ml-[100px] max-[1500px]:ml-[50px] max-[1000px]:ml-[25px]  pb-[199px] max-[1500px]:pb-[100px] max-[1000px]:pb-[60px]  max-[767px]:pb-[100px]  relative">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 max-[1000px]:mb-[40px] max-[767px]:mr-[40px]">
        <h2 className="font-['Figtree'] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] font-bold text-[#083124] text-7xl max-[1000px]:text-[36px] max-[1000px]:leading-[48px] max-[500px]:text-[28px] max-[500px]:leading-[38px]   tracking-[0] leading-[82px]">
          Some Reviews
        </h2>
        <h3 className="font-['Figtree'] font-semibold text-[#00b67a] max-[1000px]:text-[24px] max-[1000px]:leading-[38px]  max-[500px]:text-[20px] max-[500px]:leading-[30px] max-[767px]:mx-auto   text-[32px] tracking-[0] leading-[50px]">
          OF OUR CLIENTS
        </h3>
      </div>

      {/* Testimonials Container */}
      <div className="relative w-full ">
        {/* Timeline */}
        <div className="absolute right-1/2 transform -translate-x-1/2 max-[1100px]:right-[100px] max-[767px]:right-[70px] max-[500px]:right-[50px]  h-full flex flex-col items-center ">
          <div className="relative h-full w-px  bg-[#64cfa9] ">
            <Badge className="absolute top-[63px] left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 p-0 max-[500px]:top-[20px]  bg-[#64cfa9] rounded-[5px]" />
            <Badge className="absolute top-[280px] max-[1100px]:top-[250px] max-[800px]:top-[200px] max-[500px]:top-[130px] left-1/2 transform -translate-x-1/2 w-[18px] h-[18px] p-0 bg-[#64cfa9] rounded-[9px]" />
            <Badge className="absolute top-[500px] max-[1100px]:top-[450px] max-[800px]:top-[350px] max-[500px]:top-[230px]  left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 p-0 bg-[#64cfa9] rounded-[5px]" />
          </div>
        </div>

        {/* Left side testimonials */}
        <div className="flex flex-col max-[500px]:items-center">
          {/* Top testimonial */}
          <div className="flex items-center w-[351px] mb-[27px] max-[1750px]:ml-[50px] max-[1400px]:ml-0 max-[1100px]:ml-[50px] max-[767px]:w-full max-[767px]:ml-0 max-[360px]:pr-[20px]">
            <img className="w-[126px] h-[126px]  max-[800px]:w-[90px] max-[800px]:h-[90px] max-[500px]:w-[60px] max-[500px]:h-[60px]  " src='/first.png' />
            <div className="ml-12 max-[500px]:ml-[25px]">
              <div className="font-['Figtree'] font-semibold text-[24px] max-[500px]:text-[16px] max-[500px]:leading-[28px]  max-[350px]:text-[14px] max-[350px]:leading-[24px]   leading-[34px] text-[#083124] whitespace-nowrap max-[360px]:whitespace-normal">
                PAULO HUBERT
              </div>
              <div className="font-['HindVadodara'] text-base leading-[26px] max-[500px]:text-[14px] max-[350px]:leading-[22px] max-[350px]:text-[12px] max-[500px]:leading-[18px]     text-[#083124]  font-normal whitespace-nowrap">
                New York, USA
              </div>
            </div>
          </div>

          {/* Middle testimonial - highlighted */}
          <div className="flex items-center w-full max-w-[1630px] justify-between mb-[56px] max-[1750px]:pr-[50px] max-[500px]:max-w-[400px] max-[340px]:max-w-[100%] max-[767px]:mb-8">
            <Card className="w-full max-w-[580px] max-[1500px]:max-w-[480px] max-[1100px]:max-w-[580px] max-[800px]:max-w-[480px] max-[767px]:max-w-[450px] max-[500px]:max-w-[400px] max-[346px]:max-w-[100%]   h-[170px] max-[800px]:h-[130px] max-[500px]:h-[80px]  bg-[#00b67a1a] border-none [box-shadow:0px_4px_21px_1px_#307BC41A] rounded-[25px]  ml-16 max-[1400px]:ml-[20px] max-[1100px]:ml-[100px] max-[767px]:ml-0 max-[767px]:mr-[40px] max-[767px]:ml-0">
              <CardContent className="flex items-center p-0 h-full w-full">
                <img className="w-[126px] h-[126px] ml-[75px] max-[800px]:w-[90px] max-[800px]:h-[90px] max-[500px]:w-[60px] max-[500px]:h-[60px]  max-[1500px]:ml-[20px] max-[432px]:ml-[10px] object-cover bg-center" src='/second.png' />
                <div className="ml-12 max-[500px]:ml-[10px]">
                  <div className="font-['Figtree'] font-semibold text-[24px] max-[500px]:text-[16px] max-[500px]:leading-[28px] max-[350px]:text-[14px] max-[350px]:leading-[24px] leading-[34px] text-[#083124]  ">
                    LAURENCE VENDETTA
                  </div>
                  <div className="font-['HindVadodara'] text-base leading-[26px] max-[350px]:leading-[22px] max-[350px]:text-[12px] max-[500px]:text-[14px] max-[500px]:leading-[22px]   text-[#083124]  font-normal whitespace-nowrap">
                    California, USA
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial text on the right */}
            <div className="w-full max-w-[690px] max-[1700px]:max-w-[550px] max-[1400px]:max-w-[450px] max-[1700px]:mr-[80px] max-[1500px]:mr-[40px] max-[1400px]:mr-[60px] max-[1100px]:mr-0 max-[1500px]:max-w-[600px] relative max-[1100px]:hidden">
              <div className="relative h-[211px] ml-[114px] ">
                <img
                  className="absolute w-[50px] h-[37px] -left-[88px] -top-8"
                  alt="Quote"
                  src="/vector.svg"
                />
                <p className="font-['Poppins'] font-normal text-[#083124] text-xl tracking-[0] leading-[30px] opacity-50 mt-10">
                  I recently had to bring my child to ProHealth for a minor
                  injury, and I was so impressed with the care he received. The
                  pediatrician was great with him and made him feel at ease, and
                  the entire staff was kind and attentive.
                </p>
                <img
                  className="w-24 h-[17px] mt-4"
                  alt="Rating"
                  src="/name.png"
                />
              </div>
            </div>
          </div>

          {/* Bottom testimonial */}
          <div className="flex items-center w-[390px] max-[1750px]:ml-[50px] max-[1400px]:ml-0 max-[1100px]:ml-[50px] max-[767px]:ml-0 max-[767px]:w-full max-[365px]:max-w-[300px] max-[360px]:mr-[50px] max-[340px]:mr-[20px]">
            <img className="w-[126px] h-[126px]  max-[800px]:w-[90px] max-[800px]:h-[90px] max-[500px]:w-[60px] max-[500px]:h-[60px] " src='/third.png' />
            <div className="ml-12 max-[500px]:ml-[10px]">
              <div className="font-['Figtree'] font-semibold text-[24px] max-[500px]:text-[16px] max-[500px]:leading-[28px] max-[350px]:text-[14px] max-[350px]:leading-[24px] leading-[34px] text-[#083124] whitespace-nowrap max-[360px]:whitespace-normal">
                CASSANDRA RAUL
              </div>
              <div className="font-['HindVadodara'] text-base leading-[26px] max-[350px]:leading-[22px] max-[350px]:text-[12px] max-[500px]:text-[14px]  max-[500px]:leading-[22px]   text-[#083124]  font-normal whitespace-nowrap">
                Florida
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
