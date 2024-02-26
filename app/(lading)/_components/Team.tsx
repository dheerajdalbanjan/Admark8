import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React from "react";

const Team = () => {
  let teamMembers = [
    {
      name: "Ronit Bongale",
      position: "CEO",
      description:
        "Meet Ronit Bongale, the visionary CEO of our Social Media Marketing Agency. With a passion for transforming digital landscapes, Ronit leads our team in crafting innovative strategies to boost brand visibility and engagement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Dheeraj Dalbanjan",
      position: "CTO",
      description:
        "Passionate about technology innovation, Dheeraj leads our dynamic tech team in crafting cutting-edge solutions. With a deep commitment to excellence, he ensures that our technology ecosystem remains at the forefront, delivering unparalleled experiences for our users.",
    },
    {
      name: "Satwik Bhat",
      position: "CFO",
      description:
        "As a finance enthusiast, Satwik Bhat drives our financial strategy, bringing a wealth of expertise to ensure fiscal responsibility and sustainable growth. With a keen eye for financial intricacies, Satwik plays a pivotal role in optimizing our financial performance and guiding the company towards financial success.",
    },
    {
      name: "Manish Shetty",
      position: "CMO",
      description:
        "Driven by an unwavering passion for marketing innovation, Manish Shetty, our Chief Marketing Officer, spearheads our dynamic marketing team. With a keen focus on excellence, he ensures that our marketing strategies are at the forefront, delivering compelling and impactful campaigns that resonate with our audience.",
    },
  ];

  return (
    <div className="md:px-24  bg-dot-white/[0.2]">
      <h2 className="text-3xl pt-7 pb-3 md:text-5xl text-center font-bold antialiased text-neutral-100">
        Our Team
        <div className="flex flex-col my-3 md:flex-row max-w-7xl mx-auto gap-3 items-center justify-center md:justify-between">
          {teamMembers.map((e, i) => (
            <CardContainer key={i} className="inter-var !py-0 w-fit">
              <CardBody className="bg-gray-50 !py-5 relative group/card my-0 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[17rem] rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {e.name}, <span className="text-blue-500">{e.position}</span>
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 font-normal text-start leading-relaxed text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {e.description}
              </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default Team;
