






import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
        <div className='bg-gray-900'>
            <div className="mb-10 pt-20">
                <h1 className='xl:text-5xl lg:text-[4xl] md:text-[2xl] text-2xl font-bold text-white text-center'data-aos="zoom-in">
                    My <span className='text-cyan-600'>Services</span>
                </h1>
            </div>
            <div className="flex flex-col items-center px-10 md:px-32">
                
                <div className="card w-full md:w-4/6 rounded-lg shadow-[0px_0px_60px_rgba(0,191,255,0.75)] p-6 mx-2 mb-6 bg-gray-800" data-aos='fade-right'>
                    <h1 className='text-3xl text-white font-bold mb-4'>Frontend Development</h1>
                    <p className='text-sm text-white mb-4 line-clamp-3'>I specialize in building responsive, visually appealing web pages using HTML, CSS, and JavaScript. I translate design concepts into functional interfaces for a seamless user experience on all devices.</p>
                    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-cyan-500 rounded-lg group">
                        <span className="absolute inset-0 w-0 h-0 transition-all duration-300 bg-cyan-500 rounded-lg group-hover:w-full group-hover:h-full"></span>
                        <span className="absolute left-0 right-0 w-full h-0 transition-all duration-300 bg-gray-900 rounded-lg group-hover:h-2"></span>
                        <span className="relative text-cyan-500 transition duration-300 group-hover:text-white">
                            See More
                        </span>
                        <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-cyan-500 blur-md shadow-[0_0_20px_rgba(0,191,255,0.75)]"></span>
                    </button>
                </div>

            
                <div className="card w-full md:w-4/6 rounded-lg shadow-[0px_0px_60px_rgba(0,191,255,0.75)] p-6 mx-2 mb-6 bg-gray-800" data-aos='fade-left'>
                    <h1 className='text-3xl text-white font-bold mb-4'>UI/UX Design</h1>
                    <p className='text-sm text-white mb-4 line-clamp-3'>I craft intuitive, user-centered designs that enhance user satisfaction and engagement. My design process focuses on creating interfaces that are both visually appealing and functionally efficient.</p>
                    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-cyan-500 rounded-lg group">
                        <span className="absolute inset-0 w-0 h-0 transition-all duration-300 bg-cyan-500 rounded-lg group-hover:w-full group-hover:h-full"></span>
                        <span className="absolute left-0 right-0 w-full h-0 transition-all duration-300 bg-gray-900 rounded-lg group-hover:h-2"></span>
                        <span className="relative text-cyan-500 transition duration-300 group-hover:text-white">
                            See More
                        </span>
                        <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-cyan-500 blur-md shadow-[0_0_20px_rgba(0,191,255,0.75)]"></span>
                    </button>
                </div>

                <div className="card w-full md:w-4/6 rounded-lg shadow-[0px_0px_60px_rgba(0,191,255,0.75)] p-6 mx-2 mb-6 bg-gray-800" data-aos='fade-right'>
                    <h1 className='text-3xl text-white font-bold mb-4'>SEO</h1>
                    <p className='text-sm text-white mb-4 line-clamp-3'>I optimize websites for search engines, focusing on performance, accessibility, and keyword relevance to improve visibility and ranking, thereby driving more organic traffic.</p>
                    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-cyan-500 rounded-lg group">
                        <span className="absolute inset-0 w-0 h-0 transition-all duration-300 bg-cyan-500 rounded-lg group-hover:w-full group-hover:h-full"></span>
                        <span className="absolute left-0 right-0 w-full h-0 transition-all duration-300 bg-gray-900 rounded-lg group-hover:h-2"></span>
                        <span className="relative text-cyan-500 transition duration-300 group-hover:text-white">
                            See More
                        </span>
                        <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-cyan-500 blur-md shadow-[0_0_20px_rgba(0,191,255,0.75)]"></span>
                    </button>
                </div>
            </div>
            </div>
        </>
    );
}

export default Services;
