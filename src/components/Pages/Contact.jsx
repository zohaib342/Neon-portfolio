
import React,{useEffect} from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);

  return (
  
<>
<div className='bg-gray-900'>

    <div className="mb-10 pt-20 ">
                <h1 className='xl:text-5xl lg:text-[4xl] md:text-[2xl] text-2xl font-bold text-white text-center'data-aos="zoom-in">
                Contact <span className='text-cyan-600'> Us</span>
                </h1>
            </div>
    <div className="bg-gray-900 text-white py-10 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row md:justify-between items-center  space-y-8 md:space-y-0 ">
      {/* Contact Info */}
      <div className="text-center md:text-left flex-1 space-y-4" data-aos='fade-left'>
        <h1 className="text-4xl font-bold">Contact with me</h1>
        <p className="text-white/70 text-xl">Have a project in mind? Let's chat!</p>

        <p className="text-xl">
          Address: <span className="text-cyan-600">Lahore, Punjab, Pakistan</span>
        </p>
        <p className="text-xl">
          Email: <span className="text-cyan-600">zohaibaliasif6@gmail.com</span>
        </p>
        <p className="text-xl">
          phone: <span className="text-cyan-600">+92-0000000000</span>
        </p>
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" className="text-3xl text-cyan-600 hover:brightness-125 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition duration-300 ease-in-out">
            <FaInstagram />
          </a>
          <a href="#" className="text-3xl text-cyan-600 hover:brightness-125 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition duration-300 ease-in-out">
            <FaTwitter />
          </a>
          <a href="#" className="text-3xl text-cyan-600 hover:brightness-125 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition duration-300 ease-in-out">
            <FaFacebook />
          </a>
          <a href="#" className="text-3xl text-cyan-600 hover:brightness-125 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition duration-300 ease-in-out">
            <FaLinkedin />
          </a>
        </div>
      </div>

   
      <div className="form flex-1 bg-gray-800 p-6 rounded-lg  max-w-lg w-full mx-auto transition duration-300 ease-in-out shadow-[0px_0px_60px_rgba(0,191,255,0.75)]" data-aos='fade-right'>
        <form>
          <div className="mb-4">
            <label className="font-medium">Full name</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg outline-none transition focus:border-cyan-600 focus:shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            />
          </div>
          <div className="mb-4">
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg outline-none transition focus:border-cyan-600 focus:shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            />
          </div>
          <div className="mb-4">
            <label className="font-medium">Company</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg outline-none transition focus:border-cyan-600 focus:shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            />
          </div>
          <div className="mb-4">
            <label className="font-medium">Message</label>
            <textarea
              required
              className="w-full mt-2 px-3 py-2 h-32 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg outline-none resize-none transition focus:border-cyan-600 focus:shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            ></textarea>
          </div>
          <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-cyan-500 rounded-lg group w-full ">
                        <span className="absolute inset-0 w-0 h-0 transition-all duration-300 bg-cyan-500 rounded-lg group-hover:w-full group-hover:h-full"></span>
                        <span className="absolute left-0 right-0 w-full h-0 transition-all duration-300 bg-gray-900 rounded-lg group-hover:h-2"></span>
                        <span className="relative text-cyan-500 transition duration-300 group-hover:text-white">
                          Submit
                        </span>
                        <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-cyan-500 blur-md shadow-[0_0_20px_rgba(0,191,255,0.75)]"></span>
                    </button>  
        </form>
      </div>
    </div>
    </div></>
  );
}

export default Contact;
