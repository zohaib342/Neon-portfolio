




import React from 'react';

export default () => {
    const footerNavs = [
        {
            label: "Links",
            items: [
                { href: 'about', name: 'About' },
                { href: 'services', name: 'Services' },
                { href: 'skills', name: 'Skills' },
                { href: 'contact', name: 'Contact Us' },
            ],
        },
        {  label: "Links",
            items: [
                { href: 'about', name: 'About' },
                { href: 'services', name: 'Services' },
                { href: 'skills', name: 'Skills' },
                { href: 'contact', name: 'Contact Us' },
            ],
        },
        {
            label: "Links",
            items: [
                { href: 'about', name: 'About' },
                { href: 'services', name: 'Services' },
                { href: 'skills', name: 'Skills' },
                { href: 'contact', name: 'Contact Us' },
            ]
        },
    ];

    return (
        <footer className="text-white bg-gray-800 py-8 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                {/* Contact Information and Subscription Form */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl text-cyan-600 font-bold">Zohaib Asif</h1>
                    <p className="text-[15px] leading-relaxed">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="pt-4">
                        <label className="block pb-2">Stay up to date</label>
                        <div className="flex items-center border rounded-md p-1 max-w-md">
                            <input 
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none bg-transparent text-white"
                            />
                            <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-cyan-500 rounded-lg group">
                                <span className="absolute inset-0 w-0 h-0 transition-all duration-300 bg-cyan-500 rounded-lg group-hover:w-full group-hover:h-full"></span>
                                <span className="relative text-cyan-500 transition duration-300 group-hover:text-white">
                                    Submit
                                </span>
                                <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-cyan-500 blur-md shadow-[0_0_20px_rgba(0,191,255,0.75)]"></span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {footerNavs.map((nav, idx) => (
                        <ul key={idx} className="space-y-4">
                            <h4 className="text-cyan-600 font-medium">{nav.label}</h4>
                            {nav.items.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="hover:underline hover:text-indigo-600">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

        
            <hr className="mt-8 border-gray-600" />
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-400">
                <span>© 2024 <a href="#" className="hover:underline">Zohaib Asif™</a>. All Rights Reserved.</span>
                <ul className="flex space-x-6 mt-4 md:mt-0">
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Licensing</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}
