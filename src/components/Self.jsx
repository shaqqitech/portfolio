import React from 'react';

export default function Self() {
  return (
    <section className="mx-auto px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto md:h-72 flex justify-center items-center">
      <div className="w-full space-y-5 p-4 shadow-lg dark:shadow-2xl dark:shadow-gray-700">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8338ec] text-center">
          Why did I become a frontend developer?
        </h1>
        <p className="w-full text-center">
          I decided to become a self-taught front-end developer because I was passionate about learning how to code and
          building websites. I knew that I could learn the skills I needed online and through self-study, and I was
          confident that I could be successful.
        </p>
      </div>
    </section>
  );
}
