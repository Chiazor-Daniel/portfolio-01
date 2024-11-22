import React, { useState } from 'react';

import Profile from './components/profile';
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';

function App() {
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];
  const [theme, setTheme] = useState('dark')
  const [page, setPage] = useState('about')
  return (
    <div className={`${theme == 'dark' ? 'bg-[#141414]' : 'bg-white'} backdrop-blur-lg backdrop-filter h-screen flex lg:flex-row flex-col w-full overflow-auto items-center lg:justify-center md:py-12 md:px-[10%] md:gap-8 relative`}>
      <Profile />
      <div className='flex-1 w-full bg-[#252528] p-2 lg:h-[700px] md:rounded-2xl relative backdrop-blur-lg backdrop-filter'>
        <ul className='flex md:w-auto w-full absolute top-0 right-0 py-4 overflow-auto gap-5 md:gap-8 text-lg px-8 justify-center md:px-10  bg-[#1e1e1f] backdrop-blur-lg backdrop-filter md:rounded-bl-xl md:rounded-tr-xl'>
          {links.map((link, index) => (
            <li key={index} onClick={()=>setPage(link.label.toLowerCase())} className={`cursor-pointer text-white ${link.label.toLowerCase() === page ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent' :'hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text hover:text-transparent'}`}>
              {link.label}
            </li>
          ))}
        </ul>
        {page === 'about' && <About handlePage={()=>setPage('skills')}/>}
        {page === 'skills' && <Skills />}
        {page === 'resume' && <Resume />}
      </div>
    </div>
  );
}

export default App;