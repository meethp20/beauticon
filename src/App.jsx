import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './components/Typewriter';
import AnimatedBox from './components/AnimatedBox';
import Reveal from './components/Reveal';
function App() {
  return (
    <div>
    <div className='flex w-full h-screen justify-center items-center bg-gradient-to-b from-pink-200 to-purple-500'>
     
      <Reveal className=''>
        <h1 className='text-4xl '>weird omg </h1>
      </Reveal>
      

    </div>
     <div className='flex w-full h-screen justify-center items-center bg-gradient-to-b from-purple-500 to-pink-200'>
          <Reveal>
               <motion.div
      variants={{
        hidden: {opacity: 0, x:100},
        visible:{opacity: 1, x:0}
      }}
        initial="hidden"  
        animate="visible"
         
        transition={{ duration: 2, delay:0.5 }}
        className='p-'
      >
        <h1 className='text-2xl md:text-6xl lg:text-8xl  text-center  '>
          The Real {" "}
           <span  className=' text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500'>
               <TypewriterText text=" REAL golden experience" duration={1.5} />
             </span>
        </h1>
      </motion.div>
          </Reveal>
     </div>
    <div className='flex w-full h-screen justify-center items-center bg-gradient-to-b from-pink-200 to-purple-500'>
      <Reveal>
        hello
      </Reveal>
    </div>
    </div>
  );
}

export default App;

