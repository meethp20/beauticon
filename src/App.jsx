import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './components/Typewriter';
import AnimatedBox from './components/AnimatedBox';
function App() {
  return (
    <div className='flex w-full h-screen justify-center items-center bg-gradient-to-b from-pink-200 to-purple-500'>
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
       <AnimatedBox /> 
    </div>
  );
}

export default App;

