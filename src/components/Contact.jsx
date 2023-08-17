import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: FaInstagram, link: 'https://www.instagram.com/shaqqitech/' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/shaqqitech/' },
    { icon: FaTwitter, link: 'https://twitter.com/shaqqitech/' },
    { icon: FaWhatsapp, link: 'https://wa.me/+923204101834/' },
  ];

  return (
    <div className="h-[400px] p-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex justify-center items-center text-[#8338ec]">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions, ideas, or just want to say hello? Feel free to connect with me on social media or drop me a message. I'd love to hear from you!
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 hover:text-blue-500">
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
