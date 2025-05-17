import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './components/Typewriter';
import AnimatedBox from './components/AnimatedBox';
import Reveal from './components/Reveal';
import Button from './components/Button';
import ReButton from './ReButton';
import Card from './components/Card';
function App() {
  return (
    
   
   <div> 
      <Card 
      title ="girl"
      description = " cool chick yo"
      imageUrl= "src/assets/zhanna-rinatova-cifs1-g0Da8-unsplash.jpg" 
      />
      <Card 
      title="sexy girl"
      description= " sexy chick yo"
      imageUrl="https://i.pinimg.com/736x/d0/72/d9/d072d9930bab93ce0ce90d85b96b6ac8.jpg" 
      
      />
   </div>

   
   
    
  );
}

export default App;

