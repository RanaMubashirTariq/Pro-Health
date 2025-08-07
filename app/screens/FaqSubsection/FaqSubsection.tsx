import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function FaqSubsection  () {
  const faqItems = [
    {
      question: "What services does ProHealth offer?",
      answer: "",
    },
    {
      question: "How do I schedule an appointment with ProHealth?",
      answer: "",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance plans. Please check with your insurance provider to confirm that we are in-network. If you have any questions about insurance or billing, please contact our office at 123-456-7890.",
    },
    {
      question: "What should I bring to my appointment?",
      answer: "",
    },
    {
      question: "How do I request a prescription refill?",
      answer: "",
    },
  ];

  return (
    <section className="w-full relative max-w-[1129px] mx-auto py-16 max-[1000px]:py-[40px] max-[1000px]:px-[25px] max-[1500px]:px-[50px]">
      <div className="text-center mb-16 max-[767px]:mb-10">
        <h3 className="text-[#00b67a]  font-semibold max-[1000px]:text-[24px] max-[1000px]:leading-[34px] text-[32px] leading-[50px] [font-family:'Figtree']">
          WHAT PEOPLE
        </h3>
        <h2 className="text-[#083124] font-bold max-[1500px]:text-[56px] max-[1500px]:leading-[66px] max-[1000px]:text-[36px] max-[1000px]:leading-[48px] text-7xl leading-[82px] [font-family:'Figtree']">
          Usually Asked
        </h2>
      </div>

                     <Accordion type="single" collapsible className="w-full max-w-[1074px]">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            className={`group transition-all duration-300 ease-in-out
                        data-[state=open]:bg-[#00B67A]
                        data-[state=open]:ml-[55px]
                        max-[1100px]:data-[state=open]:ml-[15px]
                        w-full max-w-[1074px]
              mb-4 rounded-[25px] max-[500px]:rounded-[15px] border border-solid border-[#d2eaef] ${index === 2 ? "bg-[#00b67a4c] bg-opacity-50 shadow-hover-drop-shadow" : ""}`}
          >
            <AccordionTrigger className=" px-10 py-6 hover:no-underline [&>svg]:hidden group max-[767px]:px-5 max-[330px]:px-3  max-[767px]:py-[15px]">
              <div className="flex justify-between w-full">
                <span className="[font-family:'Poppins'] font-medium text-[#083124] max-[767px]:text-[18px] max-[767px]:leading-[28px] text-xl tracking-[0] leading-[34px] text-left">
                  {item.question}
                </span>
                <img  src='/faq-icon.svg' className="h-7 w-7 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-10 pb-6">
              <p className="font-['Hind_Vadodara'] font-normal text-base text-[#083124] ">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
