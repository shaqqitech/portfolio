import React from 'react';

const Experience = () => {
  const experienceItems = [
    {
      title: 'Frontend Developer',
      company: 'Awesome Web Solutions',
      duration: 'June 2022 - Present',
      description: 'Collaborated with cross-functional teams to develop and maintain responsive web applications using HTML, CSS, and JavaScript. Leveraged React.js and Tailwind CSS to create engaging user interfaces and ensure optimal user experiences.',
    },
    {
      title: 'React Native Developer',
      company: 'Mobile App Innovators',
      duration: 'January 2022 - May 2022',
      description: 'Contributed to the development of mobile applications using React Native framework. Translated design mockups into interactive user interfaces, implemented smooth navigation, and integrated third-party libraries for enhanced functionality.',
    },
    {
      title: 'Frontend Intern',
      company: 'WebTech Enterprises',
      duration: 'May 2021 - August 2021',
      description: 'Assisted in the creation of responsive web pages using HTML, CSS, and Bootstrap framework. Gained hands-on experience in collaborating with senior developers to enhance user experiences and troubleshoot frontend issues.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.company}</p>
              <p className="text-gray-600 mb-2">{item.duration}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
