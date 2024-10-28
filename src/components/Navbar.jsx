

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Me from '../assets/me copy.png'
export default () => {
    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "about" },
        { title: "Services", path: "services" }, 
        { title: "Skills", path: "skills" },
        { title: "Contact Us", path: "contact" }

    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])

    const menuVariants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } }
    }

    return (
        <nav className={`bg-gray-700 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between md:block">
                <div className="name">

<h1 className='text-2xl text-white font-serif'>Zohaib Asif</h1>

                    </div>
                    <div className="md:hidden">
                        <button className="menu-btn text-white"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <motion.div 
                    className="flex-1 items-center mt-8 md:hidden"
                    initial="closed"
                    animate={state ? "open" : "closed"}
                    variants={menuVariants}
                >
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li key={idx} className="text-white pb-5">
                                <a href={item.path} className="block">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                </motion.div>

                <div className="hidden md:flex flex-1 items-center mt-8 md:mt-0 justify-between">
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li key={idx} className="text-white">
                                <a href={item.path} className="block">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
             <div className="img">
<img src={Me} alt="" width={40} className='rounded-full' />

             </div>
                </div>
            </div>
        </nav>
    )
}
