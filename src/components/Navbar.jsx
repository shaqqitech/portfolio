import { useState } from 'react';
import { AiFillHome, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonFill, BsJoystick } from 'react-icons/bs';
import { MdCloudDone } from 'react-icons/md';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('Home'); // Set the default active tab to 'Home'

    const navTabs = [
        { name: 'Home', icon: <AiFillHome /> },
        { name: 'About', icon: <BsFillPersonFill /> },
        { name: 'Experience', icon: <BsJoystick /> },
        { name: 'Projects', icon: <MdCloudDone /> },
        { name: 'Contact', icon: <AiFillPhone /> },
    ];

    const handleTabClick = (name) => {
        setActiveTab(name === activeTab ? null : name);
    };

    return (
        <>
            <nav className='w-[90%] h-20 border-2 border-white fixed bottom-4 rounded-3xl bg-[#8338ec]'>
                <div className='w-full h-full flex justify-evenly items-center'>
                    {navTabs.map((item, ind) => (
                        <div className='relative' key={ind}>
                            <h1
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
                            </h1>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
}
