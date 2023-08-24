
import { BsFillMoonStarsFill } from "react-icons/bs";
import ProfilePic from "../assets/images/mainPic.png";

export default function Home() {


  return (
    <>
      <section className="w-screen h-screen px-10 py-5" id="home">
        {/* Navbar */}
        <div className="flex justify-around items-center">
          <h1 className="text-3xl font-semibold">
            Shaqqi<span className="text-[#8338ec] font-bold">Tech</span>
          </h1>
          <BsFillMoonStarsFill size={30} style={{ cursor: "pointer" }} />
        </div>
        {/* Homepage content */}
        <div className="h-screen flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
          <div className="text-center h-80 md:h-[70vh] flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8338ec]">
              Self-Taught
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8338ec]">
              Frontend Developer
            </h1>
            <h6 className="text-xl md:text-2xl lg:text-3xl font-bold dark:text-white">
              Who loves to create
            </h6>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8338ec]">
              Beautiful Layouts
            </h1>
          </div>
          <div className=" pt-16 flex justify-center items-center mb-48 md:h-[70vh]">
            <img
              src={ProfilePic}
              alt="Profile Pic"
              className="w-56 md:w-64 lg:w-80 "
            />
          </div>
        </div>
      </section>
    </>
  );
}
