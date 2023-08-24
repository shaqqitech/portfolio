import { useState } from 'react';
import { AiFillHome, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonFill, BsJoystick } from 'react-icons/bs';
import { MdCloudDone } from 'react-icons/md';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState(''); // Add Home as useState value if you want to Set the default active tab as 'Home'

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
            <nav className='w-[content-fit] h-20 px-4 border-2 border-white fixed bottom-10 rounded-3xl bg-[#8338ec] opacity-80'>
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