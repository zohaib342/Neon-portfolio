
import React,{useEffect} from "react";

import SkillLevel from "./SkillLevel";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);

  return (
    <div
      id="Skill"
      className="mainBg  overflow-x-hidden  py-24 w-full flex flex-col gap-6 mx-auto items-center bg-gray-900 h-auto "
    >
   
      <div className="flex flex-col items-center gap-1 z-30">
        <div className="flex items-center justify-center gap-2 heading rounded-lg">
          <h1 className="xl:text-5xl lg:text-[4xl] md:text-[2xl] text-2xl font-bold tracking-wide mb-2 text-white" data-aos="zoom-in">
            Technical <span className="text-cyan-600"> Skills</span>
          </h1>
        </div>
      </div>
      
      
      
      <SkillLevel />
   

    </div>
  );
};

export default Skills;
