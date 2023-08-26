import { useState } from 'react';
import { AiFillHome, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSortUp } from 'react-icons/bi';
import { MdCloudDone } from 'react-icons/md';
import { Link } from 'react-scroll'; // npm install react-scroll

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('');

    const navTabs = [
        { name: 'Home', icon: <AiFillHome />, id: "home" },
        { name: 'About', icon: <BsFillPersonFill />, id: "about" },
        { name: 'Experience', icon: <BiSortUp />, id: "experience" },
        { name: 'Projects', icon: <MdCloudDone />, id: "projects" },
        { name: 'Contact', icon: <AiFillPhone />, id: "contact" },
    ];

    const handleTabClick = (name) => {
        setActiveTab(name === activeTab ? null : name);
    };

    return (
        <nav className='w-[content-fit] h-20 px-4 border-2 border-white fixed bottom-10 lg:bottom-1 rounded-3xl bg-[#8338ec] opacity-80'>
            <div className='w-full h-full flex justify-evenly items-center'>
                {navTabs.map((item, ind) => (
                    <div className='relative' key={ind}>
                        {/* Use the Link component from react-scroll */}
                        <Link
                            onClick={()=>handleTabClick(item.name)}
                            to={item.id}
                            spy={true}
                            smooth={true}
                            duration={500}
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
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    );
}
