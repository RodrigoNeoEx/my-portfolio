import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useScreen } from '../context/ScreenContext';

const HamburguerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useScreen();

  const menu = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Portfolio", id: "#portfolio" },
    { name: "Contact", id: "#contact" },
  ];
  


  const navContainer = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.5
      }
    },
    hidden: {
      x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <header className="text-white py-4 px-8 fixed top-0 left-0 w-full z-50">
      <div className={`flex items-center justify-center`}>       
        <button          
          className="text-4xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}            
        >
          {isMenuOpen 
          ? <motion.div className='backdrop-blur-lg font-logo text-6xl pt-0 leading-10 bg-black'> N </motion.div>
          : <FaBars className='backdrop-blur-lg bg-black'/>}
        </button>
      </div>
      
      {isMenuOpen && (
        <AnimatePresence>
          <motion.div           
            className="text-white flex justify-center items-center"                      
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <motion.ul
              className="grid gap-4 grid-cols-4 backdrop-blur-lg bg-black"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navList}
            >             
              {menu.map((item, i)  => {                  
                return (
                <motion.li className="nav-item py-1" variants={navItem} key={i}>
                  <a href={item.id} className={`block text-center hover:text-lime-400 ${isMobile ? "text-lg" : "text-4xl"} font-sten`}>{item.name}</a>                 
                </motion.li>
                )
              })}              
            </motion.ul>        
          </motion.div>
        </AnimatePresence>  
      )}
    </header>
  );
};





export default HamburguerHeader;
