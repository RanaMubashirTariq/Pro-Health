'use client'
import React , {useState} from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function DepartmentsSubsection  () {

         const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

const departments = [
  {
    icon: "/emergency-icon.svg",
    iconT:'/emergency-icon-1.svg',
    name: "Emergency Department",
    iconClassName: "w-[76px] h-[72px]",
    isActive: false,
  },
  {
    icon: "/pediatric.svg",
    iconT:'/pediatric-1.svg',
    name: "Pediatric Departement",
    iconClassName: "w-[89px] h-[72px]",
    isActive: false,
  },
  {
    icon: "/gynecology-1.svg",
    iconT:'/gynecology.svg',
    name: "Obstetrics and Gynecology Department",
    iconClassName: "w-[72px] h-[72px]",
    isActive: false,
  },
  {
    icon: "/cardiology.svg",
    iconT:'/cardiology-1.svg',
    name: "Cardiology Department",
    iconClassName: "w-[60px] h-[72px]",
    isActive: false,
  },
  {
    icon: "/neurology.svg",
    iconT:'/neurology-1.svg',
    name: "Neurology Department",
    iconClassName: "w-[70px] h-[72px]",
    isActive: false,
  },
  {
    icon: "/psychiatry.svg",
    iconT:'/psychiatry-1.svg',
    name: "Psychiatry Department",
    iconClassName: "w-[67px] h-[73px]",
    isActive: false,
  },
];


  return ( 
     <section className="relative w-full max-w-[1922px]  h-[571px] mt-[103px] px-[123px] max-[1500px]:px-[50px] max-[1000px]:px-[25px] max-[1850px]:h-[900px] max-[1000px]:h-[1200px] max-[767px]:h-[1400px] max-[500px]:h-[1500px]">
    <div className="relative w-full h-[449px] max-[1000px]:h-[250px]  py-24  bg-custom-gradient rounded-[25px] overflow-hidden">
              
               <img src="/vector-5.svg" className="absolute top-0 left-0 w-[623px] h-[655px] z-0" alt="" />
               <img src="/vector-4.svg" className="absolute top-0 right-0 w-[623px] h-[655px] z-0" alt="" />

    </div>
                 <div className="w-full max-w-[1618px]  px-[13px] max-[1800px]:px-[70px]  max-[767px]:px-[25px] absolute top-[110px] left-1/2 -translate-x-1/2 z-10 mx-auto">
        <h2 className="text-[72px] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] max-[1000px]:text-[36px] max-[1000px]:leading-[48px] leading-[82px] font-bold text-[#083124] text-center mb-16 font-['Figtree']">
          Departments
        </h2>

 <div className="relative flex items-center justify-center max-[1850px]:flex-wrap gap-6 mx-auto max-[1850px]:px-[100px] max-[1500px]:px-[0px] max-[1850px]:gap-15 max-[1550px]:gap-[40px] max-[1350px]:gap-[80px] max-[1150px]:gap-[40px]">
          {departments.map((department, index) => {
            const isActive = hoveredIndex === index;

            return (
              <Card
                key={`department-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full sm:w-[253px] h-[290px] max-[767px]:h-auto rounded-[20px] transition-all duration-300 border-none [box-shadow:0px_4px_21px_1px_#307BC41A] ${
                  isActive
                    ? "bg-[#64cfa9] shadow-hover-drop-shadow mb-[30px]"
                    : "bg-[#ffffff] shadow-main-content-drop-shadow"
                }`}
              >
                <CardContent className="flex flex-col items-center justify-center h-full p-6 relative">
                  <div className="mb-6">
                    <img
                      className={department.iconClassName}
                      src={isActive ? department.iconT : department.icon}
                      alt="department icon"
                    />
                  </div>
                  <p
                    className={`font-medium text-xl text-center leading-[30px] [font-family:'Poppins'] ${
                      isActive ? "text-[#ffffff]" : "text-[#083124]"
                    }`}
                  >
                    {department.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
