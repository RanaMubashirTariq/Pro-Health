import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function OurValuesSubsection() {
  const valueCards = [
    {
      title: "Compassion",
      description:
        "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.",
      icon: "/campassion.png",
    },
    {
      title: "Excellence",
      description:
        "We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.",
      icon: "/exellence.png",
    },
    {
      title: "Integrity",
      description:
        "We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first.",
      icon: "/integrity.png",
    },
    {
      title: "Respect",
      description:
        "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.",
      icon: "/respect.png",
    },
    {
      title: "Teamwork",
      description:
        "We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients.",
      icon: "/teamwork.png",
    },
  ];

  return (
    <section className="relative w-full mt-[300px] max-[1500px]:mt-[150px] max-[1000px]:mt-[60px] flex flex-col gap-[72px] max-[1500px]:gap-[50px]">
      <h2 className="text-center font-bold text-[72px] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] max-[1022px]:text-[36px]  max-[1022px]:leading-[56px] leading-[82px] font-['Figtree'] text-[#083124]">
        Our Values
      </h2>

      <div className="flex justify-center items-center flex-wrap px-[150px] max-[1780px]:px-[100px]   max-[1500px]:px-[50px] max-[1000px]:px-[25px] gap-[187px] max-[1900px]:gap-[130px] max-[1670px]:gap-[80px] max-[1300px]:gap-[40px] max-[1000px]:gap-[20px]">
        {valueCards.map((card, index) => (
          <Card
            key={index}
            className="group bg-[#64cfa91a] rounded-[25px] max-[800px]:w-[80%] max-[500px]:w-[100%]  w-[390px] max-[1300px]:w-[355px]  h-[417px] max-[1100px]:h-auto [box-shadow:0px_4px_21px_1px_#307BC41A] border-none transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className="relative p-6 sm:p-8 md:py-[70px] md:px-[47px] z-50">
                <div className="flex flex-col items-center sm:gap-[62px] gap-10 transition-all duration-300 md:hover:gap-[40px] ">
                  <div className="flex items-center  justify-center p-4 rounded-[30px] transition-all duration-300 group-hover:bg-[#d5f5ec] group-hover:w-[465px] max-[1300px]:group-hover:w-[400px]  max-[500px]:group-hover:w-[100%]">
                    <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] mr-4 sm:mr-5">
                      <img src={card.icon} alt={`${card.title}-pic`} />
                    </div>
                    <h3 className="font-semibold font-['Figtree'] text-[28px] sm:text-[32px] md:text-[40px] leading-[50px] text-[#083124]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-['Poppins'] text-[14px] sm:text-[15px] sm:leading-[22px]  md:text-[16px] leading-[26px] font-normal text-center text-[#0274760] opacity-60">
                    {card.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
