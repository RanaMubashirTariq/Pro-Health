'use client'
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useState } from "react";

export default function HeroSectionSubsection  () {
                
  const [activeMenu, setActiveMenu] = useState("/");
    const [City, setToCity] = useState("Cardiology");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
            
const menuItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "about" },
  { name: "Find Doctor", id: "departments" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];
  const bookingOptions = [
    {
      label: "Date",
      value: "August 23, 2023",
      icon: "/icon-date.png",
    },
    {
      label: "Specialization",
      value: "Cardiology",
      icon: "/icon-specialization.png",
      hasDropdown: true,
    },
    {
      label: "Location",
      value: "New York, US",
      icon: "/icon-location.png",
    },
  ];


  const handleSmoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 100; // Adjust based on your actual header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth"
    });
    
    setActiveMenu(id);
    setIsMenuOpen(false);
    
    // Update URL without causing full page reload
    window.history.pushState(null, "", `#${id}`);
  }
};




  
const CustomDropdown = ({
  options,
  selected,
  setSelected,
}: {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[186px] max-[767px]:max-w-[150px] max-[1000px]:max-w-full z-20">
      <div
        onClick={() => setOpen(!open)}
        className=" z-10 bg-transparent font-['Poppins'] font-normal opacity-60 text-[#274760] text-[20px] max-[1000px]:text-lg max-[767px]:text-base max-[767px]:leadig-[22px] leading-[26px] border-none rounded-[10px]  py-1 cursor-pointer flex justify-between items-center gap-10"
      >
        <span>{selected}</span>
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {open && (
        <ul className="absolute top-full mt-1 w-full bg-white rounded-[10px] shadow z-40  max-[500px]:top-[-100px]">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 opacity-60 hover:bg-[#083124] hover:text-white cursor-pointer  text-[#274760] font-['Poppins'] font-normal  text-[20px] max-[1000px]:text-lg max-[767px]:text-base max-[767px]:leading-[22px] leading-[26px] max-[500px]:py-3"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};






  return (
    <section className="relative w-full h-[1203px] max-[1500px]:h-[900px] max-[1100px]:h-[1000px] max-[1022px]:h-auto max-[767px]:h-[860px] max-[500px]:h-[700px]">
      <div className="relative w-full h-[1097px] max-[1500px]:h-[800px] max-[1022px]:h-[550px] max-[767px]:h-[760px] bg-custom-gradient pb-[30px] ">
                      <img src="/Vector-3.png" className="absolute bottom-0 left-0 w-[623px] h-[655px] z-0 max-[767px]:w-[300px] max-[767px]:h-[450px] max-[767px]:top-[50px] max-[1022px]:w-[400px] max-[500px]:w-[200px] max-[1022px]:h-[350px] max-[1022px]:top-[100px]" alt="" />
               <img src="/Vector-2.png" className="absolute -top-[200px] right-0 w-[623px] h-[655px] z-0 max-[767px]:w-[400px] max-[767px]:h-[600px] max-[767px]:-top-[300px] max-[500px]:w-[300px] max-[500px]:h-[400px] max-[500px]:top-[-200px] max-[1022px]:w-[400px] max-[1022px]:h-[500px] max-[1022px]:-top-[200px]" alt="" />
               <img src="/Vector-1.png" className="absolute top-[50px] -right-[200px] w-[872px] h-[1030px]  z-0 max-[767px]:w-[400px] max-[767px]:h-[600px] max-[767px]:top-[100px] max-[500px]:w-[300px] max-[767px]:h-[400px] max-[1022px]:w-[600px] max-[1022px]:h-[600px] max-[1022px]:top-[50px]" alt="" />
        {/* Background image would go here */}
         <div className="w-full h-auto bg-[url('/blur-back.jpg')]"/>
        {/* Navigation */}





 <div className="w-full z-51   px-[150px] max-[1780px]:px-[100px] max-[1500px]:px-[50px] max-[1000px]:px-[25px] pt-[59px] max-[1000px]:pt-[30px] flex justify-between items-center ">
      <div className="w-full flex items-center gap-[124px]">
        <div className="w-[173px] h-[28px] max-[767px]:w-[130px]">
          <img src="/logo.svg" alt="" className="w-full h-full object-contain" />
        </div>

        <div
          className={`gap-[50px] flex max-[1250px]:absolute max-[1250px]:top-[100px] max-[767px]:top-[80px] max-[1250px]:right-3 max-[1250px]:w-[150px] rounded-xl max-[1250px]:bg-[#eafff8] max-[1250px]:flex-col max-[1250px]:items-center max-[1250px]:py-6 max-[1250px]:gap-6 z-50 transition-all duration-300 ${
            isMenuOpen ? "max-[1250px]:flex" : "max-[1250px]:hidden"
          }`}
        >
     {menuItems.map((item, index) => (
  <div
    key={index}
    onClick={() => handleSmoothScroll(item.id)}
    className={`font-['Poppins'] text-base max-[767px]:text-sm max-[767px]:leading-[20px] leading-[26px] cursor-pointer ${
      activeMenu === item.id ? "text-[#083124] font-semibold" : "text-[#083124] font-normal"
    }`}
  >
    {item.name}
  </div>
))}
        </div>
      </div>

      <div className="relative flex items-center justify-between w-[107px]">
        <img className="w-[29.34px] h-[29.34px] max-[767px]:w-[25px] max-[767px]:h-[25px]" src="/Search.png" alt="Icon" />
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer block">
          <img className="w-[29.34px] h-[29.34px] max-[767px]:w-[25px] max-[767px]:h-[25px] absolute right-0 top-0 z-51" src="/menu.png" alt="Menu Toggle" />
        </div>
      </div>
    </div>

        {/* Hero Content */}

         <div className="absolute top-[163px] right-[107px] w-[872px] max-[1600px]:right-[50px] max-[1500px]:w-[600px] max-[1500px]:h-[850px] h-[934px] max-[1500px]:top-[50px] max-[1500px]:right-[50px] max-[1200px]:w-[400px] max-[1100px]:top-[150px] max-[1000px]:top-[-88px] max-[900px]:right-[20px] max-[767px]:w-[400px] max-[767px]:h-[350px] max-[500px]:w-[300px] max-[500px]:h-[300px] max-[350px]:w-[270px] max-[767px]:top-[320px]">
              <img src="/doctor-img.png" className="w-full h-full object-contain" alt="" />
         </div>
        <div className="relative flex w-full mt-[189px]  max-[1500px]:mt-[100px] max-[1000px]:mt-[40px] pl-[150px] max-[1780px]:pl-[100px] max-[1500px]:px-[50px] max-[1022px]:px-[25px]">
                       
          <div className="w-[912px] max-[1880px]:w-[612px]   flex flex-col items-start ">
                 <div className="w-full flex flex-col gap-[29px] max-[767px]:gap-5">
                                   <h1 className="w-full max-w-[908px] max-[1880px]:max-w-[600px] max-[500px]:text-[28px] max-[500px]:leading-[38px]  max-[1022px]:max-w-[400] max-[500px]:max-w-[300px]   max-[1022px]:text-[36px]  max-[1022px]:leading-[48px]  font-bold text-[94px] max-[1500px]:text-[72px] max-[1500px]:leading-[82px] font-['Figtree'] text-[#083023] leading-[104px] tracking-[0%]">
              Your Partner in Health and Wellness
            </h1>

            <p className="w-full max-w-[646px] max-[1880px]:max-w-[550px] max-[900px]:max-w-[400px]   font-['Poppins'] font-normal text-[20px] max-[767px]:text-[14px] max-[767px]:leading-[22px] text-[#083124] leading-[30px]">
              We are committed to providing you with the best medical and
              healthcare services to help you live healthier and happier.
            </p>
                 </div>

            <Button
              variant="ghost"
              className="mt-[100px] max-[1500px]:mt-[50px] max-[767px]:mt-[20px]  p-0 h-auto flex items-center gap-4 hover:bg-transparent"
            >
              <div className="w-[50px] h-[50px] relative max-[767px]:w-[30px] max-[767px]:h-[30px]">
                <img className="w-full h-full" src='/video-logo.png' alt="Vector" />
              </div>
              <span className="font-['Poppins'] font-normal leading-[30px] text-xl max-[767px]:text-[13px] max-[767px]:leading-[22px] text-[#083124]">
                See how we work
              </span>
            </Button>
          </div>

          <div className="absolute w-[1044px] max-[1500px]:w-[850px] h-[300px] top-[208px] right-[134px] max-[1600px]:right-[70px] max-[1500px]:top-[140px] max-[1500px]:right-[50px] max-[1300px]:hidden">
            {/* Background decorative elements */}

            {/* Stats */}
            <div className="relative ">
              {/* Patient Recover Card */}
                 <img src="Element-2.png" className="absolute top-0 right-0 w-[224px] h-[242px]" alt="" />

              {/* Doctors Card */}
                     <img src="/Element-1.png" className=" absolute top-[196px] left-0 w-[384px] h-[104px]" alt="" />
            </div>
          </div>
        </div>

        {/* Booking Section */}
      </div>



       
      <Card className=" absolute top-[991px] max-[1500px]:top-[720px] max-[1022px]:top-[480px] max-[767px]:top-[660px] max-[500px]:top-[570px]  z-10 left-1/2 -translate-x-1/2    w-full max-w-[1620px] max-[1500px]:max-w-[1320px]
       max-[1500px]:max-w-[1220px] max-[1650px]:max-w-[1450px] max-[1650px]:mr-[40px] max-[1200px]:max-w-[1050px] max-[1100px]:max-w-[900px] max-[1022px]:max-w-[700px] max-[767px]:w-[490px] max-[500px]:w-[350px] max-[365px]:w-[280px] h-[212px] max-[1100px]:h-auto bg-[#eafff8]
        rounded-[15px] [box-shadow:0px_4px_21px_1px_#307BC41A] border-none ">
          <CardContent className="flex items-center justify-center h-full p-0 ">
            <div className="flex items-center w-full justify-between px-[114px] max-[1500px]:px-[50px] max-[767px]:px-[20px]  max-[1100px]:flex-wrap  max-[1100px]:justify-between  max-[1100px]:items-start  max-[1100px]:gap-[30px] max-[1100px]:py-[30px] max-[500px]:flex-col">
              {bookingOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-6">
                  <img
                    className="w-[70px] h-[70px] max-[767px]:w-12 max-[767px]:h-12"
                    alt={`${option.label} Icon`}
                    src={option.icon}
                  />

                  <div className="flex flex-col">
                    <span className="font-['Poppins'] font-semibold text-dark-blue text-base max-[767px]:text-sm max-[767px]:leadig-[22px] leading-[26px] text-[#274760]">
                      {option.label}
                    </span>

                    {option.hasDropdown ? (
                              <CustomDropdown
                      options={["Cardiology", "Emergency", "Nurogest", "Dialysis"]}
                      selected={City}
                      setSelected={setToCity}
        />
                    ) : (
                      <span className="font-['Poppins'] font-normal text-[#274760] text-xl max-[767px]:text-base max-[767px]:leadig-[22px] leading-[26px] opacity-60 mt-1 text-[#274760]">
                        {option.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <Button className="w-[163px] h-[50px] bg-[#64cfa9] rounded-3xl  max-[1100px]:mr-[50px]">
                <span className="font-['Poppins'] font-medium text-[#eafff7] text-base max-[767px]:text-sm max-[767px]:leadig-[22px] tracking-[0.24px] leading-[26px]">
                  Book Now
                </span>
                 <img src="/right-arrow.png" className="w-[14px] h-[10px]" alt="" />
              </Button>
            </div>
          </CardContent>
        </Card>
    </section>
  );
};