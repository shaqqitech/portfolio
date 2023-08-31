import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {MdOutlineAlternateEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u84l14j', 'template_873vcwn', form.current, 'b2xXijH4JhEy5vbAU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('')
      setEmail('')
      setMessage('')
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
  };


  return (
    <section className="h-[fit-content] w-[95%] py-12 text-center pb-40" id="contact">
      <div className="container mx-auto">
        <h1 className="text-4xl text-[#8338ec] font-bold mb-6" data-aos="fade-down">Contact</h1>
        <div className="md:w-[80%] lg:w-[60%] mx-auto ">
          <form onSubmit={sendEmail} ref={form} className=" rounded-xl shadow-lg dark:shadow-2xl dark:shadow-gray-700 p-6 space-y-4  hover:scale-105 duration-300"  data-aos="fade-up">
          
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border dark:border-[#8338ec] dark:bg-gray-900 border-gray-300 rounded-md focus:ring-[#8338ec] focus:border-[#8338ec] transition duration-300 outline-[#8338ec]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border dark:border-[#8338ec] dark:bg-gray-900 border-gray-300 rounded-md focus:ring-[#8338ec] focus:border-[#8338ec] transition duration-300 outline-[#8338ec]"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border dark:border-[#8338ec] dark:bg-gray-900 border-gray-300 rounded-md focus:ring-[#8338ec] focus:border-[#8338ec] transition duration-300 outline-[#8338ec]"
              rows="4"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#8338ec] text-white rounded-md hover:bg-[#6c27cc] transition duration-300"
            >
              Send
            </button>
            {submitted && <p className="text-green-600">Message submitted successfully!</p>}
          </form>
          <div className="flex justify-center mt-8">
            <a href="https://wa.me/+923204101834" target="_blank" rel="noopener noreferrer" className="text-[#8338ec] hover:text-[#128C7E] mx-4">
              <FaWhatsapp size={30} />
            </a>
            <a href="https://www.instagram.com/shaqqitech/" target="_blank" rel="noopener noreferrer" className="text-[#8338ec] hover:text-[#BE185D] mx-4">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com/shaqqitech/" target="_blank" rel="noopener noreferrer" className="text-[#8338ec] hover:text-[#1A91DA] mx-4">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com/in/shaqqitech/" target="_blank" rel="noopener noreferrer" className="text-[#8338ec] hover:text-[#0A66C2] mx-4">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto: mehars665@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#8338ec] hover:text-[#BE185D] mx-4">
              <MdOutlineAlternateEmail size={30} />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
