'use client'
import { useRef, useState } from "react";
import { CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import Radio from "@mui/material/Radio";

export default function AppointmentSubsection  () {
  // Form field data
  const reasonOptions = [
    { id: "routine", label: "Routine Checkup", checked: false },
    { id: "new-patient", label: "New Patient Visit", checked: true },
    { id: "specific", label: "Specific Concern", checked: false },
  ];

  const departmentOptions = [
    { id: "pediatric", label: "Pediatric", checked: false },
    { id: "obgyn", label: "Obstetrics and Gynecology", checked: true },
    { id: "cardiology", label: "Cardiology", checked: false },
    { id: "neurology", label: "Neurology", checked: false },
  ];


    // State for each radio group
  const [selectedReason, setSelectedReason] = React.useState("new-patient");
  const [selectedDept, setSelectedDept] = React.useState("obgyn");

  // Radio control helper
  const controlProps = (
    value: string,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>
  ) => ({
    checked: selected === value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setSelected(event.target.value),
    value,
    name: `radio-${value}`,
    inputProps: { "aria-label": value },
  });






    const hiddenDateRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("Agust 24 , 2023");

  const handleIconClick = () => {
    // Open hidden date input
    hiddenDateRef.current.showPicker();
  };

  const handleDateChange = (e) => {
    // Format the date
    const date = new Date(e.target.value);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setSelectedDate(formattedDate);
  };


// Add this with your state
const [time, setTime] = useState("3:30");
const [amPm, setAmPm] = useState("PM");

// Updated clock click handler
const handleClockClick = () => {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // Convert to 12-hour format
  const formattedHours = hours % 12 || 12;
  const amPmValue = hours >= 12 ? "PM" : "AM";

  // Set state separately
  setTime(`${formattedHours}:${minutes}`);
  setAmPm(amPmValue);
};


  return (
    <section className="relative w-full py-[249px] max-[1500px]:py-[100px] max-[1000px]:py-[40px] mt-16 max-[1880px]:px-[150px] max-[1780px]:px-[100px] max-[1750px]:px-[100px]  max-[1000px]:px-[25px]  max-[1500px]:px-[50px]">
      <div className="relative z-10 container mx-auto ">
        <div className="flex flex-col mb-12">
          <h3 className="font-semibold text-[#00b67a] max-[767px]:text-[24px] max-[767px]:leading-[34px] text-[32px] max-[767px]:text-center leading-[50px]">
            BOOK AN
          </h3>
          <h2 className="font-['Figtree'] font-bold text-[#083124] text-[72px] max-[1500px]:text-[56px] max-[1500px]:leading-[66px] max-[1000px]:text-[36px] max-[1000px]:text-[48px] max-[767px]:text-center max-[330px]:text-[34px] leading-[82px]">
            Appointment
          </h2>
        </div>

        <div className=" w-full max-w-[800px] max-[1750px]:max-w-[730px] max-[1600px]:max-w-[600px] max-[1300px]:max-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Field */}
            <div className="flex flex-col gap-3">
              <Label
                htmlFor="name"
                className="font-normal font-['Poppins'] text-[#083124] text-base leading-[26px]"
              >
                Name
              </Label>
              <Input
                id="name"
                defaultValue="David John"
                className="h-20 rounded-[30px]  font-['Poppins']  border-[#083124] opacity-50 px-8 py-[27px] max-[767px]:h-15 max-[767px]:py-[10px] max-[1300px]:h-10 font-normal text-[#083124] text-base leading-[26px]"
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col gap-3">
              <Label
                htmlFor="phone"
                className="font-normal font-['Poppins']  text-[#083124] text-base leading-[26px]"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                defaultValue="(123) 456 - 789"
                className="h-20 rounded-[30px] font-['Poppins']  border-[#083124] opacity-50 px-8 py-[27px] max-[767px]:h-15 max-[767px]:py-[10px] max-[1300px]:h-10 font-normal text-[#083124] text-base leading-[26px]"
              />
            </div>

            {/* Medical Record Number Field */}
            <div className="flex flex-col gap-3 md:col-span-2 mt-[22px]">
              <Label
                htmlFor="medical-record"
                className="font-normal font-['Poppins']  text-[#083124] text-base leading-[26px]"
              >
                Medical Record Number
              </Label>
              <Input
                id="medical-record"
                defaultValue="123456-7890-0987"
                className="h-20 rounded-[30px] font-['Poppins']  border-[#083124] opacity-50 px-8 py-[27px] max-[767px]:h-15 max-[767px]:py-[10px] max-[1300px]:h-10 font-normal text-[#083124] text-base leading-[26px]"
              />
            </div>

            {/* Preferred Date Field */}
            <div className="flex flex-col gap-3 mt-[22px] max-[767px]:mt-0">
      <Label
        htmlFor="date"
        className="font-normal font-['Poppins'] text-[#083124] text-base leading-[26px]"
      >
        Preferred Date
      </Label>

      <div className="relative">
        {/* Visible Input */}
        <Input
          id="date"
          value={selectedDate}
          readOnly
          placeholder="Agust 24 , 2023"
          className="h-20 rounded-[30px] font-['Poppins'] 
            max-[767px]:py-[10px] max-[767px]:h-15 max-[1300px]:h-10 
            border-[#083124] opacity-50 pl-[67px] py-[27px] 
            font-normal text-[#083124] text-base leading-[26px]"
        />

        {/* Calendar Icon */}
        <CalendarIcon
          onClick={handleIconClick}
          className="absolute w-5 h-5 top-[30px] max-[1300px]:top-[20px] left-8 opacity-60 cursor-pointer"
        />

        {/* Hidden Native Date Picker */}
        <input
          type="date"
          ref={hiddenDateRef}
          onChange={handleDateChange}
          className="hidden"
        />
      </div>
    </div>

            {/* Preferred Time Field */}
              <div className="flex flex-col gap-3 mt-[22px] max-[767px]:mt-0">
      <Label
        htmlFor="time"
        className="font-normal font-['Poppins'] text-[#083124] text-base leading-[26px]"
      >
        Preferred Time
      </Label>

      <div className="relative">
  <Input
    id="time"
    value={time}
    readOnly
    placeholder="3:30"
    className="h-20 rounded-[30px] font-['Poppins'] 
      max-[767px]:py-[10px] max-[767px]:h-15 max-[1300px]:h-10 
      border-[#083124] opacity-50 pl-[67px] py-[27px] 
      font-normal text-[#083124] text-base leading-[26px]"
  />

  <ClockIcon
    onClick={handleClockClick}
    className="absolute w-5 h-5 top-[30px] 
      max-[1300px]:top-[17px] max-[767px]:top-[20px] left-8 opacity-60 cursor-pointer"
  />

  {/* AM/PM span */}
  <span className="absolute top-[27px] max-[1300px]:top-[15px] max-[767px]:top-[18px] right-[67px] opacity-60 font-normal text-[#083124] text-base leading-[26px]">
    {amPm}
  </span>
</div>
    </div>
          </div>
          

          {/* Reason for Visit */}
          <div className="mt-[48px]">
            <Label className="block mb-2 font-normal text-[#083124] text-base">
              Reason for Visit
            </Label>
            <div className="flex flex-wrap gap-10">
              {reasonOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Radio
                    {...controlProps(option.id, selectedReason, setSelectedReason)}
                      sx={{
                          color: "#083124",
                          width: '20px',
                          height : '20px',
                          marginRight:'15px',                 // unchecked state border
                          "&.Mui-checked": {
                            color: "#083124",
                           width: '20px',
                          height : '20px',
                          marginRight:'15px',  // checked circle & border
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 20, // icon size
                          },
                        }}
                  />
                  <Label htmlFor={option.id} className="opacity-60 text-[#083124] font-['Poppins'] font-normal text-base leading-[26px">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Department */}
               <div className="mt-[42px]">
            <Label className="block mb-2 font-normal text-[#083124] text-base">
              Department
            </Label>
            <div className="flex flex-wrap gap-10">
              {departmentOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Radio
                    {...controlProps(option.id, selectedDept, setSelectedDept)}
                      sx={{
                          color: "#083124",
                           width: '20px',
                          height : '20px',
                          marginRight:'15px',  // unchecked state border
                          "&.Mui-checked": {
                            color: "#083124",
                          width: '20px',
                          height : '20px',
                          marginRight:'15px',  // checked circle & border
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 20, // icon size
                          },
                        }}
                  />
                  <Label htmlFor={option.id} className="opacity-60 text-[#083124] font-['Poppins'] font-normal text-base leading-[26px">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>


          {/* Submit Button */}
          <Button className="mt-12 h-[50px] w-[163px] bg-[#083124] rounded-3xl shadow-button-drop-shadow">
            <span className="font-medium font-['Poppins']  text-white text-base tracking-[0.24px] leading-[26px]">
              Submit
            </span>
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M1 5H13M13 5L9 1M13 5L9 9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
             <div className="w-[1376px] h-full absolute top-0 right-0 z-0">
                      <img src="/Vector-7.png" className="absolute top-[200px] max-[1500px]:top-[100px] max-[1000px]:py-[40px] -right-[200px] w-[1049px] h-[1050px]    z-0" alt="" />
                  <img src="/Photo.png" className="absolute top-[370px] right-[150px] max-[1750px]:right-[100px] max-[1500px]:right-[50px] max-[1500px]:top-[250px] w-[599px] h-[745px] rounded-[30px] max-[1330px]:hidden  object-cover" alt="" />
             </div>
    </section>
  );
};
