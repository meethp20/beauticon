import React from 'react';
import { motion, useAnimate } from 'framer-motion';
import TypewriterText from './components/Typewriter';
import AnimatedBox from './components/AnimatedBox';
import Reveal from './components/Reveal';
import Button from './components/Button';
import ReButton from './ReButton';
import Card from './components/Card';
function App() {
    const start = useAnimate()
    
  return (
  

   
   <div> 
     {/* <Card 
      title ="girl"
      description = " cool chick yo"
      imageUrl= "src/assets/zhanna-rinatova-cifs1-g0Da8-unsplash.jpg" 
      />
      <Card 
      title="sexy girl"
      description= " sexy chick yo"
      imageUrl="https://i.pinimg.com/736x/d0/72/d9/d072d9930bab93ce0ce90d85b96b6ac8.jpg" 
      
      />*/}
            
                <motion.div
                initial ={{opacity:0}}
               whileInView={{opacity:2}}
                 transition={{duration:4}}
                 className='flex w-screen h-screen bg-amber-50 text-center justify-center'
                 > 
               <h1 className='text-4xl '>Hellow maya</h1>



                </motion.div>

                <motion.div className='w-full h-screen  ' >
                <TypewriterText
                text="Hello, I am a software engineer"
                className="text-4xl font-bold text-center mt-10"
                />
                </motion.div>
   </div>

   
   
    
  );
}

export default App;

