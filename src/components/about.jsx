import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango, SiRubyonrails, SiMongodb, SiSolidity } from 'react-icons/si';
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
const About = ({handlePage}) => {
  const iconStyles = 'text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text';

  const skills = [
    { icon: <FaReact className={iconStyles} />, name: 'React' },
    { icon: <SiJavascript className={iconStyles} />, name: 'JavaScript' },
    { icon: <SiTypescript className={iconStyles} />, name: 'TypeScript' },
    { icon: <SiTailwindcss className={iconStyles} />, name: 'Tailwind' },
    { icon: <SiNextdotjs className={iconStyles} />, name: 'Next.js' },
    { icon: <FaNodeJs className={iconStyles} />, name: 'Node.js' },
    { icon: <FaPython className={iconStyles} />, name: 'Python' },
    { icon: <SiDjango className={iconStyles} />, name: 'Django' },
    { icon: <SiRubyonrails className={iconStyles} />, name: 'Ruby on Rails' },
    { icon: <SiMongodb className={iconStyles} />, name: 'MongoDB' },
    { icon: <FaDatabase className={iconStyles} />, name: 'SQL' },
    { icon: <SiSolidity className={iconStyles} />, name: 'Solidity' },
  ];

  const dos = [
    {
      icon: 'web.png',
      title: 'Web Development',
      text: "With a passion for awesome precision and meticulous attention to detail, I specialize in crafting high-quality, professional-level websites. My dedication to delivering unparalleled excellence in web development sets a new standard for modern, cutting-edge digital experiences"
    },
    {
      icon: 'phone.png',
      title: 'Mobile Apps',
      text: "With an unwavering commitment to awesome precision and attention to detail, I specialize in developing exceptional applications for both iOS and Android platforms. My dedication to delivering professional-grade, high-quality mobile experiences sets a new standard in app development, ensuring unparalleled excellence for users worldwide."
    },

  ]
  return (
    <>
      <div className='w-fit max-sm:mt-14'>
        <div className='flex justify-between w-full gap-[120px] items-center'>
          <h1 className='text-4xl text-white p-4 font-bold'>About Me</h1>
          {/* <button className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-10 px-8 text-white rounded-xl md:hidden'>Resume</button> */}
        </div>
        <div className='p-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-1/4 ml-4 -mt-2'></div>
      </div>
      <div className='flex-1 p-4 mt-2'>
        <p className='text-gray-300'>Highly skilled web and mobile developer with over 2 years of experience in leading development projects, exceling in gathering user requirements, writing clean and robust code, and creating stunning mockups and designs. Proficient in a range of technologies including JavaScript, React, Next.js, Tailwind, Node.js, Python, Django, Ruby, Ruby on Rails, MongoDB, SQL, and Typescript, with expertise in mobile app development using React Native and Flutter, Progressive Web Apps (PWA) development, and Web3 technologies, including Solidity for smart contract development. I'm a detail-oriented, organized, and meticulous developer who works efficiently to meet tight deadlines and thrive as an enthusiastic team player, passionate about crafting attractive, interactive, and secure digital solutions that exceed customer expectations.</p>
        <h2 className='text-2xl text-white font-bold mb-4 mt-4'>Skills</h2>
        <div className='flex gap-4 overflow-auto'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center bg-[#1e1e1f] rounded-full p-4 w-fit'>
              <div className='text-3xl'>
                {React.cloneElement(skill.icon, {
                  className: iconStyles
                })}
              </div>
            </div>
          ))}
          <div onClick={()=>handlePage()} className='flex flex-col items-center  rounded-full p-4 w-fit hover:scale-125 duration-200 transition-all bg-gradient-to-r from-fuchsia-500 to-cyan-500 cursor-pointer'>
          <FaPersonWalkingArrowRight className='text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-3xl'/>
          </div>
        </div>
        <h2 className='text-2xl text-white font-bold mb-4 mt-6'>What I'm doing</h2>
        <div className='flex md:flex-row flex-col gap-4'>
          {
            dos.map((item) => (
              <div className='w-full bg-[#1e1e1f] px-8 py-6 rounded-lg flex gap-4 cursor-pointer relative'>
                <div className='flex items-center absolute -top-4 -right-2 bg-[#252528] p-4 rounded-full'>
                  <img src={item.icon} className='w-[40px]' />
                </div>
                <div>
                  <p className='text-white font-bold text-xl mb-2'>{item.title}</p>
                  <p className='text-gray-300 text-sm'>{item.text}</p>
                </div>
              </div>
            )
            )
          }

        </div>
      </div>
    </>

  )
}

export default About