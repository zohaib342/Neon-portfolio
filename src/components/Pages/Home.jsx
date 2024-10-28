



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Me from '../Images/me.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMedScreen, setIsMedScreen] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 728);
            setIsMedScreen(window.innerWidth < 1050);
        };

        handleResize(); // Initialize state on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home bg-gray-900 text-white h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-32 pt-14">
            <div className="space-y-4 text-center md:text-left mb-6 md:mb-0" data-aos='fade-left'>
                <h1 className="text-2xl md:text-2xl font-bold">Hello. It's Me</h1>
                <h1 className="text-3xl md:text-4xl font-bold">Zohaib Asif</h1>
                <motion.h1
                    initial={{ opacity: 0, width: '0%' }}
                    animate={{ 
                        opacity: 1, 
                        width: isSmallScreen ? '100%' : isMedScreen ? '95%' : '71%'
                    }}
                    transition={{ duration: 3 }}
                    className="text-2xl md:text-3xl font-bold border-r-2 border-white pr-2 overflow-hidden whitespace-nowrap text-cyan-600"
                >
                    I'm a Frontend Developer
                </motion.h1>
                <p className="text-white max-w-xs md:max-w-md lg:max-w-lg mx-auto md:mx-0">
                    I'm a passionate frontend developer with a knack for creating interactive, user-friendly web applications that provide a seamless experience across all devices.
                </p>
               <a href="https://www.freelancer.com/u/zohaiba46 "> <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-cyan-500 rounded-lg group mt-4">
                    <span className="absolute inset-0 w-0 h-0 transition-all duration-300 bg-cyan-500 rounded-lg group-hover:w-full group-hover:h-full"></span>
                    <span className="absolute left-0 right-0 w-full h-0 transition-all duration-300 bg-gray-900 rounded-lg group-hover:h-2"></span>
                    <span className="relative text-cyan-500 transition duration-300 group-hover:text-white">
                        Hire Me
                    </span>
                    <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-cyan-500 blur-md shadow-[0_0_20px_rgba(0,191,255,0.75)]"></span>
                </button></a>
            </div>

            <div className="img mt-6 md:mt-0" data-aos='fade-right'>
                <img
                    src={Me}
                    alt="Zohaib Asif"
                    width={300}
                    className="w-60 md:w-80 lg:w-[400px] rounded-lg shadow-[0px_0px_60px_rgba(0,191,255,0.75)]"
                />
            </div>
        </div>
    );
}

export default Home;
