import { motion } from 'framer-motion';
import Video from '../assets/Video';
import { useScreen } from "../context/ScreenContext";
import SvgTech from '../assets/SvgTech';

const Hero = () => {
  const { isMobile, vertical, isLoaded, setIsLoaded, horizontalMob } = useScreen();

  return (
    <section className={`bg-black text-white min-h-screen flex flex-col ${isMobile ? "items-center justify-start pt-16" : "px-20 items-start pt-12 justify-center "}`}>  
      <div className={`${isMobile ? "space-y-2 m-5" : "space-y-4 w-3/6"}`}>
        <div className='z-10 relative'>
          <motion.h1
            className={`${isMobile || horizontalMob ? "text-6xl leading-none" : "text-9xl leading-tight"} font-sten `}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello!!!
          </motion.h1>
          
          <motion.h2
            className={`
              ${isMobile || horizontalMob ? "text-6xl leading-none" : "text-9xl leading-tight"} font-sten text-lime-400`} 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            I'm Rodrigo <span className="text-white">'NeoEx'</span>
          </motion.h2>        
        </div>          
          { isMobile
          ? <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} z-0 bottom-0`}>
              <SvgTech onLoaded={() => setIsLoaded(true)}/>
            </div>
          : <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} z-0`}>
              <Video onLoaded={() => setIsLoaded(true)}/>
            </div>
          }          
      </div>
      <div className={`flex flex-col md:flex-row justify-between w-full m-2 z-10 relative ${isMobile && vertical ? "pl-20 mt-0" : ""}`}>   
        <motion.div
          className={`text-4xl md:text-5xl font-helv ${isMobile && vertical ? "pl-6" : "pl-4"}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >     
          <p className='text-6x1'>Project Mananger</p>
          <p>FrontEnd Developer</p>  
        </motion.div>       
      </div>  
    </section>
  );
};

export default Hero;
