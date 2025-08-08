import AboutUsSubsection from "./screens/AboutUsSubsection/AboutUsSubsection";
import AppointmentSubsection from "./screens/AppointmentSubsection/AppointmentSubsection";
import AwardsSubsection from "./screens/AwardsSubsection/AwardsSubsection";
import CtaSubsection from "./screens/CtaSubsection/CtaSubsection";
import DepartmentsSubsection from "./screens/DepartmentsSubsection/DepartmentsSubsection";
import FaqSubsection from "./screens/FaqSubsection/FaqSubsection";
import FooterSubsection from "./screens/FooterSubsection/FooterSubsection";
import HeroSectionSubsection from "./screens/HeroSectionSubsection/HeroSectionSubsection";
import OurBlogsSubsection from "./screens/OurBlogsSubsection/OurBlogsSubsection";
import OurValuesSubsection from "./screens/OurValuesSubsection/OurValuesSubsection";
import TestimonialsSubsection from "./screens/TestimonialsSubsection/TestimonialsSubsection";


export default function Home() {

    const partnerLogos = [
    {
      type: "image",
      src: '/logo.png',
      width: "274.75px",
      height: "89px",
      alt: "Group",
      className: "object-cover",
    },
    {
      type: "image",
      src: '/logo (1).png',
      width: "274.75px",
      height: "89px",
      alt: "Logo",
      className: "bg-cover bg-[50%_50%]",
    },
    {
      type: "image",
      src: '/logo (2).png',
       width: "274.75px",
      height: "89px",
      alt: "Group",
      className: "object-cover",
    },
    {
      type: "image",
      src: '/logo (3).png',
      width: "274.75px",
      height: "89px",
      alt: "Group",
      className: "object-cover",
    },
  ];


  return (
    <div className="w-full overflow-hidden">
         <div id="/">
              <HeroSectionSubsection/>
         </div>
       <OurValuesSubsection/>
           <div id="about">
                <AboutUsSubsection/>
           </div>
       <div id="departments"> <DepartmentsSubsection/> </div>
       <AwardsSubsection/>
       <TestimonialsSubsection/>
       <CtaSubsection/>
       <div id="blog"> <OurBlogsSubsection/> </div>
       <div id="contact"> <AppointmentSubsection/> </div>
       <FaqSubsection/>
                   <div className="flex flex-col items-start gap-[41px] w-full max-w-[1233px] mx-auto max-[1500px]:px-[50px] max-[1500px]:gap-[20px] max-[1000px]:px-[25px]">
                                            <div className="overflow-hidden w-full ">
                                  <div className="flex gap-[42px] max-[1000px]:gap-[20px] whitespace-nowrap animate-marquee-ltr min-w-max">
                                {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                              <div key={index} className="flex items-center">
                          <div
                            className="relative flex items-center justify-center w-[274.75px] h-[89px] max-[1000px]:w-[200px] max-[1000px]:h-[60px]"
                          >
                            <img
                              className="w-full h-full object-contain "
                              alt={logo.alt}
                              src={logo.src}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                                 </div>

                                 {/* Section 2 */}

                                               <div className="overflow-hidden w-full ">
                                                        <div className="flex gap-[42px] max-[1000px]:gap-[20px] whitespace-nowrap animate-marquee-ltr min-w-max">
                                                      {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                                                    <div key={index} className="flex items-center">
                                                <div
                                                  className="relative flex items-center justify-center w-[274.75px] h-[89px] max-[1000px]:w-[200px] max-[1000px]:h-[60px]"
                                                >
                                                  <img
                                                    className="w-full h-full object-contain max-[1000px]:w-[200px] max-[1000px]:h-[60px]"
                                                    alt={logo.alt}
                                                    src={logo.src}
                                                  />
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                             </div>

                      {/* section 3 */}
                      
                            <div className="overflow-hidden w-full ">
                                  <div className="flex gap-[42px] max-[1000px]:gap-[20px] whitespace-nowrap animate-marquee-ltr min-w-max">
                                {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                              <div key={index} className="flex items-center">
                          <div
                            className="relative flex items-center justify-center w-[274.75px] h-[89px] max-[1000px]:w-[200px] max-[1000px]:h-[60px]"
                          >
                            <img
                              className="w-full h-full object-contain "
                              alt={logo.alt}
                              src={logo.src}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                                 </div>
                   </div>
             <FooterSubsection/>      
    </div>
  );
}
