





import React, { useEffect } from 'react';
import Me from '../Images/me.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
        <div className='bg-gray-900'>
            <div className="text mb-10 pt-20">
                <h1 className='xl:text-5xl lg:text-[4xl] md:text-[2xl] text-2xl font-bold text-white text-center ' data-aos="zoom-in">
                    About <span className='text-cyan-600'>Me</span>
                </h1>
            </div>
            <div className="about flex flex-col md:flex-row justify-center gap-24 items-center px-5 md:px-10 lg:px-32 pt-8 bg-gray-900">
                <div className="img mb-8 md:mb-0" data-aos='fade-left'>
                    <img
                        src={Me}
                        alt="Zohaib Asif"
                        className="w-full max-w-[400px] rounded-lg shadow-[0px_0px_60px_rgba(0,191,255,0.75)]"
                    />
                </div>
                <div className="text w-full md:w-1/2 px-4 text-center md:text-left" data-aos='fade-right'>
                    <h1 className='text-3xl md:text-4xl font-bold text-cyan-600 mb-5'>Frontend Developer</h1>
                    <p className='text-white mb-7'>
                        Hi, I'm Zohaib, a passionate frontend developer with a keen eye for detail and a love for crafting intuitive and engaging user experiences. I specialize in building responsive and visually appealing web applications using modern technologies like React and Tailwind CSS. With a strong focus on clean code and usability, I strive to create seamless interactions that delight users. I am constantly exploring new tools and techniques to enhance my skills and deliver high-quality projects.
                    </p>
                    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-cyan-500 rounded-lg group">
                        <span className="absolute inset-0 w-0 h-0 transition-all duration-300 bg-cyan-500 rounded-lg group-hover:w-full group-hover:h-full"></span>
                        <span className="absolute left-0 right-0 w-full h-0 transition-all duration-300 bg-gray-900 rounded-lg group-hover:h-2"></span>
                        <span className="relative text-cyan-500 transition duration-300 group-hover:text-white">
                            More About Me
                        </span>
                        <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-cyan-500 blur-md shadow-[0_0_20px_rgba(0,191,255,0.75)]"></span>
                    </button>
                </div>
            </div>
            </div>
        </>
    );
}

export default About;
