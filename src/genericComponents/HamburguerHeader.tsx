import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


type HamburguerHeaderProps = {
  lineText: string[];
  mobile: boolean;
}

const HamburguerHeader = ({lineText, mobile}: HamburguerHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
console.log(mobile)
  return (
    <header className="text-white py-4 px-8 fixed top-0 left-0 w-full z-50">
      <div className={`flex items-center ${mobile ? "justify-end": "justify-center"}`}>       
        <button          
          className="text-4xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}            
        >
          {isMenuOpen 
          ? <motion.div className='backdrop-blur-lg rounded-xl font-logo text-6xl'> N </motion.div>
          : <FaBars className='backdrop-blur-lg rounded-xl'/>}
        </button>
      </div>
      
      {isMenuOpen && (
        <AnimatePresence>
          <motion.div           
            className="text-white flex justify-center items-center-full"                      
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <motion.ul
              className="grid gap-4 grid-cols-4 backdrop-blur-lg"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navList}
            > 
              {lineText.map((iten, i) => {             
                return (
                 <motion.li className="nav-item py-1" variants={navItem} key={i}>
                 <a href="#home" className="block text-center hover:text-lime-400 text-3xl">{iten}</a>
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