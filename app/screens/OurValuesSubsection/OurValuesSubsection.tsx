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
    <section className="relative w-full mt-[300px] max-[1500px]:mt-[100px] max-[1000px]:mt-[60px] max-[767px]:mt-10 flex flex-col gap-[72px] max-[1500px]:gap-[50px]">
      <h2 className="text-center font-bold text-[72px] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] max-[1022px]:text-[36px] max-[500px]:text-[28px] max-[500px]:leading-[38px]    max-[1022px]:leading-[56px] leading-[82px] font-['Figtree'] text-[#083124]">
        Our Values
      </h2>

      <div className="flex justify-center items-center flex-wrap px-[150px] max-[1780px]:px-[100px]   max-[1550px]:px-[50px] max-[1000px]:px-[25px] gap-[187px] max-[1900px]:gap-[130px] max-[1670px]:gap-[80px]   max-[1500px]:gap-[40px] max-[1250px]:gap-[30px]  mt-[44px] max-[767px]:mt-0">
        {valueCards.map((card, index) => (
          <Card
            key={index}
            className="group bg-[#64cfa91a] rounded-[25px] max-[800px]:w-[100%] max-[500px]:w-[100%]  w-[390px] max-[1400px]:w-[355px]  h-[417px] max-[1250px]:w-[280px] max-[1250px]:h-auto [box-shadow:0px_4px_21px_1px_#307BC41A] border-none transition-all duration-300 hover:-mt-[44px] max-[767px]:hover:mt-0"
          >
            <CardContent className="p-0">
              <div className="relative p-6  py-[70px] px-[47px] z-50 max-[1250px]:py-[30px] max-[1250px]:px-[20px]">
                <div className="flex flex-col items-center gap-[62px] gap-10 transition-all duration-300  hover:gap-[40px] max-[1100px]:hover:gap-5 max-[1100px]:gap-[30px]">
                  <div className="flex items-center  justify-center p-4 rounded-[30px] transition-all duration-300 group-hover:bg-[#d5f5ec] group-hover:w-[465px] max-[1300px]:group-hover:w-[400px]  max-[1100px]:group-hover:w-[320px] max-[1000px]:group-hover:max-w-[100%] max-[1100px]:group-hover:w-[100%]">
                    <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] mr-4 sm:mr-5">
                      <img src={card.icon} alt={`${card.title}-pic`} />
                    </div>
                    <h3 className="font-semibold font-['Figtree'] max-[1250px]:text-[28px] max-[500px]:text-[22px] max-[500px]:leading-[32px]  text-[32px] text-[40px] leading-[50px] text-[#083124]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-['Poppins'] max-[1100px]:text-[14px]  max-[1100px]:leading-[22px]  text-[16px] leading-[26px] font-normal text-center text-[#274760] opacity-60 overflow-hidden max-[1300px]:text-ellipsis max-[1300px]:line-clamp-5 "> 
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
