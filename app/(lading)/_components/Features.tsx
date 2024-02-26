import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React from "react";

const Features = () => {
  let features = [
    {
      name: "User-friendly Dashboard",
      description: "Admark8 provides a user-friendly dashboard.",
    },
    {
      name: "Secure and Private",
      description: "SMMA stands for Secure and Private Messaging Agency.",
    },
    {
      name: "24/7 Customer Support",
      description: "24/7 Customer Support.",
    },
  ];

  return (
    <div className="md:px-24  bg-dot-white/[0.2]">
      <h2 className="text-3xl pt-7 pb-3 md:text-5xl text-center font-bold antialiased text-neutral-100">
        Features
      </h2>
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-3 items-center justify-center md:justify-between">
        {features.map((e, i) => (
          <CardContainer key={i} className="inter-var !py-0 w-fit">
            <CardBody className="bg-gray-50 !py-5 relative group/card my-0 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[15rem] rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {e.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {e.description}
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Features;
