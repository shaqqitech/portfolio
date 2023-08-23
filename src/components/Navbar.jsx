import { useState } from 'react';
import { AiFillHome, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonFill, BsJoystick } from 'react-icons/bs';
import { MdCloudDone } from 'react-icons/md';
import Home from './Home.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('Home'); // Set the default active tab to 'Home'

    const navTabs = [
        { name: 'Home', icon: <AiFillHome />, id: "#home" },
        { name: 'About', icon: <BsFillPersonFill />, id: "#about" },
        { name: 'Experience', icon: <BsJoystick />, id: "#experience" },
        { name: 'Projects', icon: <MdCloudDone />, id: "#projects" },
        { name: 'Contact', icon: <AiFillPhone />, id: "#contact" },
    ];

    const handleTabClick = (name) => {
        setActiveTab(name === activeTab ? null : name);
    };
    
    

    return (
        <>
            <nav className='will-change-contents h-20 px-4 border-2 border-white fixed bottom-10 rounded-3xl bg-[#8338ec] opacity-80'>
                <div className='w-full h-full flex justify-evenly items-center'>
                    {navTabs.map((item, ind) => (
                        <div className='relative' key={ind}>
                            <a
                                style={{scrollBehavior: 'smooth'}}
                                href={item.id}
                                onClick={() => handleTabClick(item.name)}
                                className={`text-3xl text-white ${
                                    activeTab === item.name
                                        ? 'transform -translate-y-1 duration-500'
                                        : ''
                                } w-16 h-12 flex flex-col items-center justify-center cursor-pointer`}
                            >
                                <div className="mb-1">{item.icon}</div>
                                {activeTab === item.name && (
                                    <span className="text-sm">{item.name}</span>
                                )}
                            </a>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
}