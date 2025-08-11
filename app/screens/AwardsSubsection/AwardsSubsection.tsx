import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function AwardsSubsection  () {
  // Award data for mapping
  const awards = [
    {
      title: "Malcolm Baldrige National Quality Award",
      description:
        "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
      imageAlt: "award-icon.png",
    },
    {
      title: "HIMSS Davies Award",
      description:
        "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
      imageAlt: "award-icon.png",
    },
    {
      title: "Healthgrades National's Best Hospital",
      description:
        "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
      imageAlt: "award-icon.png",
    },
    {
      title: "Joint Commission Gold Seal of Approval",
      description:
        "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
      imageAlt: "award-icon.png",
    },
  ];

  return (
    <section className="w-full py-[200px] max-[1500px]:py-[100px]  max-[1000px]:py-[40px]   px-[150px] max-[1800px]:px-[150px] max-[1780px]:px-[100px] max-[1500px]:px-[50px] max-[1000px]:px-[25px]  ">
        <h2 className="font-['Figtree'] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] font-bold text-[#083124]  text-[72px] max-[1000px]:text-[36px] max-[1000px]:leading-[48px]  leading-[82px] mb-18 max-[1500px]:mb-[50px] max-[1000px]:mb-[40px]    max-[1500px]:text-center">
          Awards
        </h2>

        <div className="flex items-center justify-center  max-[1500px]:flex-wrap gap-5 max-[1500px]:gap-[100px] max-[1400px]:gap-5  max-[1000px]:gap-[20px]   w-full mx-auto">
          {awards.map((award, index) => (
            <Card
              key={`award-${index}`}
              className={`pt-[25px] pr-[28px] pb-[42px] pl-[32px] max-[1890px]:p-6 max-[370px]:p-5 max-[850px]:w-full  max-[1100px]:w-[390px] w-[390px] h-[360px]  max-[800px]:h-auto border-none [box-shadow:0px_4px_21px_1px_#307BC41A]  bg-white rounded-[15px]`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-6 mb-11">
                    <div className="w-[120px] h-[120px] flex-shrink-0  max-[1550px]:w-[100px] max-[1550px]:h-[100px] max-[800px]:w-[90px] max-[800px]:h-[90px]">
                      <img className="w-full h-full" src={award.imageAlt} alt={award.imageAlt} />
                    </div>
                    <h3 className="font-['Poppins'] font-medium text-[#083124] text-xl max-[1600px]:text-[18px] max-[370px]:text-[14px] max-[370px]:leading-[24px]  leading-[30px]">
                      {award.title}
                    </h3>
                  </div>
                  <p className="opacity-50 font-['Poppins'] text-base max-[370px]:text-[13px] max-[370px]:leading-[20px] leading-[26px] font-normal text-[#083124] over-flow:hidden text-ellipsis line-clamp-5">
                    {award.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  );
};
