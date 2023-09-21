import ProfilePic from "../assets/images/mainPic.png";
import CV from "../assets/Shafaqatcv.pdf"

export default function Home() {




  return (
    <>
      <section className="w-full h-screen px-10 py-5" id="home">

        {/* Homepage content */}
        <div className="h-screen flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
          <div className="text-center h-80 md:h-[70vh] flex flex-col justify-center items-center space-y-2" data-aos="fade-up"  data-aos-duration="600">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8338ec]">
              Self-Taught
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8338ec]">
              Frontend Developer
            </h1>
            <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white">
              Who loves to create
            </h6>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8338ec]">
              Beautiful Layouts
            </h1>
            <a href={CV} className="focus:outline-none text-white bg-[#8338ec] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" download={true}>Download CV</a>
          </div>
          <div className=" pt-16 flex justify-center items-center mb-48 md:h-[70vh]"  data-aos="fade-down"  data-aos-duration="600">
            <img
              src={ProfilePic}
              alt="Profile Pic"
              className="w-56 md:w-64 lg:w-80 hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
