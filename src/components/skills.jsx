import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaLinux } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango, SiRubyonrails, SiMongodb, SiSolidity, SiReact, SiWordpress, SiFigma, SiWebflow, SiThreedotjs, SiFlutter, SiTestinglibrary, SiSvelte } from 'react-icons/si';

const iconStyles = 'text-3xl text-white'; // Customize this

const skills = [
  { icon: <FaReact className={iconStyles} />, name: 'React', progress: 99 },
  { icon: <SiJavascript className={iconStyles} />, name: 'JavaScript', progress: 85 },
  { icon: <SiTypescript className={iconStyles} />, name: 'TypeScript', progress: 75 },
  { icon: <SiTailwindcss className={iconStyles} />, name: 'Tailwind', progress: 90 },
  { icon: <SiNextdotjs className={iconStyles} />, name: 'Next.js', progress: 80 },
  { icon: <FaNodeJs className={iconStyles} />, name: 'Node.js', progress: 60 },
  { icon: <FaPython className={iconStyles} />, name: 'Python', progress: 60 },
  { icon: <SiDjango className={iconStyles} />, name: 'Django', progress: 45 },
  { icon: <SiRubyonrails className={iconStyles} />, name: 'Ruby on Rails', progress: 40 },
  { icon: <SiMongodb className={iconStyles} />, name: 'MongoDB', progress: 45 },
  { icon: <FaDatabase className={iconStyles} />, name: 'SQL', progress: 55 },
  { icon: <SiSolidity className={iconStyles} />, name: 'Solidity', progress: 50 },
  { icon: <SiReact className={iconStyles} />, name: 'React Native', progress: 70 },
  { icon: <SiWordpress className={iconStyles} />, name: 'WordPress', progress: 60 },
  { icon: <SiFigma className={iconStyles} />, name: 'Figma', progress: 65 },
  { icon: <SiTestinglibrary className={iconStyles} />, name: 'Testing', progress: 65 },
  { icon: <SiWebflow className={iconStyles} />, name: 'Webflow', progress: 30 },
  { icon: <SiThreedotjs className={iconStyles} />, name: 'Three.js', progress: 45 },
  { icon: <SiFlutter className={iconStyles} />, name: 'Flutter', progress: 30 },
  { icon: <SiSvelte className={iconStyles} />, name: 'Svelte', progress: 50 },
  { icon: <FaDocker className={iconStyles} />, name: 'Docker', progress: 55 },
  { icon: <FaLinux className={iconStyles} />, name: 'Linux', progress: 65 },
];

const Skills = () => {
  const [animatedProgress, setAnimatedProgress] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const timeoutIds = skills.map((skill, index) => {
      return setTimeout(() => {
        setAnimatedProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = skill.progress;
          return newProgress;
        });
      }, index * 200); // Stagger animation start times
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <div className='w-full md:w-fit'>
        <h1 className='text-4xl text-white p-4 font-bold max-sm:mt-14'>Skills Assessment</h1>
        <div className='p-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-[40px] ml-4 -mt-2'></div>
        <div className='flex-1 grid md:grid-cols-5 gap-4 w-full  md:gap-8 p-4 mt-2'>
          {skills.map((skill, index) => (
            <div key={index} className='mb-4 relative w-full'>
              <div className='flex'>
                <div className='flex items-center mb-2'>
                  {skill.icon}
                  <span className='ml-2 text-white text-xl'>{skill.name}</span>
                </div>
                <p className='absolute bottom-0 z-20 right-2 text-xs text-gray-100'>{skill.progress + "%"}</p>
              </div>
              <div className="relative w-full h-4 bg-[#2c2c2e] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-width duration-1000"
                  style={{ width: `${animatedProgress[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
