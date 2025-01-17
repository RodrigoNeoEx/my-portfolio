import { motion } from 'framer-motion';
import { useScreen } from "../context/ScreenContext";
import TypingEffect from '../genericComponents/TypingEffect';
import AnimationIcons from '@/genericComponents/AnimationIcons';


const Hero = () => {
  const { isMobile, vertical, horizontalMob } = useScreen();
  const expertise = ['Project Manager', 'FrontEnd Developer', 'FullStack Developer', 'Scrum Master', 'Tech Lead'];


  return (
    <section id="home" className={`bg-black text-white min-h-screen min-w-[100vw]`}>  
      <div className={`${isMobile ? "flex-col" : "flex-row"} min-h-screen min-w-[100vw] flex items-center justify-center`}>
        <div className="ml-4 mt-12">
          <motion.h1
            className={`font-sten leading-none text-[4rem] xl:text-[6rem]`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello!!!
          </motion.h1>
          
          <motion.h2
            className={`
               font-sten text-lime-400 leading-none text-[2.75rem] xl:text-[4rem] `} 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            My name is Rodrigo <span className="text-white">'NeoEx'</span>
          </motion.h2>        
        <motion.div
          className={` font-helv text-[2rem] leading-7 mt-2 xl:text-[2.5rem] xl:leading-9`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>I have experience as:</h1>     
          <TypingEffect expertise={expertise}/>
        </motion.div>       
     
        </div>
        <div 
         className={`z-0`}>
    
            <AnimationIcons />
            {/* <img src={teste2} alt="teste2" className="w-auto h-auto max-h-[70%] absolute top-48 right-48"/> */}
          </div>          
      </div>
    </section>
  );
};

export default Hero;
