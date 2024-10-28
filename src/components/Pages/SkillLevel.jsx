

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    text: "ReactJs",
    level: 80,
  },
  {
    text: "Javascript",
    level: 80,
  },
  {
    text: "Tailwind",
    level: 90,
  },
  {
    text: "Html",
    level: 95,
  },
  {
    text: "Css",
    level: 95,
  },
];

const SkillLevel = () => {
  return (
    <div className="xl:w-[70vw] lg:w-[70vw] md:w-[95vw] w-[93vw] px-4 mx-auto border-2 bg-[#242323] shadow-2xl shadow-black border-white/60 rounded-xl flex flex-wrap justify-center items-center gap-x-9 gap-y-4 py-8 mt-11 ">
      {skills.map((item, index) => (
        <div
          key={index}
          className="xl:w-[400px] lg:w-[400px] md:w-[300px] w-[300px] flex flex-col gap-1"
        >
          <div className="flex items-center justify-start gap-2">
            <div className="text-white text-lg font-medium">{item.text}</div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="w-full bg-white/50 h-[2px] relative z-10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: item.level / 100 }}
                transition={{ duration: 2 }}
                className="absolute z-20 w-full h-[2px] border-cyan-600 origin-left top-0 flex justify-end items-end"
              >
                <div className="absolute block z-30 w-[20px] h-[20px] border-[1px] border-cyan-600 -top-2 bg-[#fff] rounded-full">
                  <div className="w-[12px] h-[12px] bg-cyan-600 mx-auto mt-[3.5px] rounded-full"></div>
                </div>
              </motion.div>
            </div>
            <div className="text-white/90">{item.level}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillLevel;
