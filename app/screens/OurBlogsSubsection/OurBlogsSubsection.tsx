'use client'
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function OurBlogsSubsection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
      date: "August 5, 2023",
      imageUrl: "/blog-1.jpg",
    },
    {
      id: 2,
      title: "Healthy Eating on a Budget: Tips and Strategies",
      date: "August 5, 2023",
      imageUrl: "/blog-2.jpg",
    },
    {
      id: 3,
      title: "The Importance of Regular Cancer Screenings and Early Detection",
      date: "August 5, 2023",
      imageUrl: "/blog-3.jpg",
    },
  ];

  return (
    <section className="relative w-full pt-[186px] pb-10 px-[150px] max-[1780px]:px-[100px] max-[1500px]:px-[50px] max-[1000px]:px-[25px] max-[1500px]:pt-[100px] max-[1000px]:pt-[40px]">
      <div className="flex flex-col items-center mb-16">
        <h3 className="font-['Figtree'] max-[1000px]:text-[24px] max-[1000px]:leading-[34px] text-[32px] leading-[42px] font-semibold text-[#00b67a] ">
          BLOG POSTS
        </h3>
        <h2 className="font-bold max-[1500px]:text-[56px] max-[1000px]:text-[36px] max-[1500px]:leading-[66px] max-[1000px]:leading-[38px] text-7xl text-[#083124] font-['Figtree'] leading-[82px]">
          Latest Update
        </h2>
      </div>

      <div className="flex  justify-center max-[1000px]:flex-wrap max-[1500px]:justify-between max-[1000px]:justify-center  gap-10 max-[1500px]:gap-[20px]">
        {blogPosts.map((post) => {
          const isHighlighted = post.id === hoveredId;

          return (
            <Card
              key={post.id}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`transition-all duration-300 w-full max-w-[527px] max-[1000px]:max-w-[400px]  max-[800px]:max-w-[300px] max-[767px]:max-w-[525px] bg-[#00b67a1a] border-none [box-shadow:0px_4px_21px_1px_#307BC41A] rounded-[20px] overflow-hidden ${
                isHighlighted
                  ? "shadow-hover-drop-shadow"
                  : "shadow-main-content-drop-shadow"
              }`}
            >
              <div className="w-full h-[380px] max-[1500px]:h-[250px] max-[767px]:w-[100%] bg-cover bg-center">
                <img
                  src={post.imageUrl}
                  className="w-full h-full object-cover  rounded-xl"
                  alt={post.title}
                />
              </div>
              <CardContent className="p-10 max-[800px]:p-5">
                <div className="flex justify-between items-center mb-[28px]">
                  <div className="opacity-50 font-['Poppins'] max-[1500px]:text-[14px] max-[1500px]:leading-[24px] font-normal text-[#083124] text-base leading-[26px]">
                    {post.date}
                  </div>
                  <img
                    className="w-[110px] h-[30px] max-[1000px]:h-[20px]  max-[1000px]:w-[80px]"
                    alt="Frame"
                    src="/Frame-218.png"
                  />
                </div>
                <h4 className="font-['Figtree'] max-[1500px]:text-[24px] max-[1500px]:leading-[38px] text-[32px] leading-[42px] text-[#083124] mb-[28px]">
                  {post.title}
                </h4>
                <div
                  className={`font-['Poppins'] max-[1500px]:text-[14px] max-[1500px]:leading-[24px] font-medium text-[#083124] text-base tracking-[0.24px] leading-[26px] ${
                    isHighlighted ? "underline" : "opacity-50"
                  }`}
                >
                  Learn more
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
