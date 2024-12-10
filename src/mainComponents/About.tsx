
import { motion } from "framer-motion"
import { useScreen } from "../context/ScreenContext";

const About = () => {
    const { isMobile, vertical, isLoaded, setIsLoaded, horizontalMob } = useScreen(); 
    return (
        <section id="about" className="bg-black py-28 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> 
                <div className="relative flex justify-center items-center w-[300px] h-[300px] mx-auto">
                    <motion.div
                        className={`font-logo text-lime-400 absolute
                            ${ isMobile || horizontalMob
                                ? "text-[20rem] leading-none"
                                : "text-10xl leading-tight"
                            }`
                        }
                        initial={{ scale: 1, y: 0 }}
                        animate={{ scale: 1.2, y: [10] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    >
                        N
                    </motion.div>          
                    <motion.div
                         className={`font-logo text-lime-200 absolute
                            ${ isMobile || horizontalMob
                                ? "text-[20rem] leading-none"
                                : "text-10xl leading-tight"
                            }`
                        }
                        initial={{ scale: 1, y: 0  }}
                        animate={{ scale: 1.15, y: [5]  }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    >
                        N
                    </motion.div>      
                    <motion.div
                        className={`font-logo text-white absolute
                            ${ isMobile || horizontalMob 
                                ? "text-[20rem] leading-none" 
                                : "text-10xl leading-tight"
                            }`
                        }
                        initial={{ scale: 1, y: 0  }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    >
                        N
                    </motion.div>
                </div>
                <div>
                    <motion.h1
                        className={`font-helv text-white mb-6
                            ${ isMobile || horizontalMob
                            ? "text-2xl leading-none"
                            : "text-4xl leading-tight"
                            }`
                        }
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        As a professional, I am{" "} <span className="text-lime-400 font-helv">dynamic</span>, with experience in IT project management and{" "} <span className="text-lime-400 font-helv"> strong communication skills and teamwork abilities </span> . With an integrated vision of business, acquired through experiences in different areas, I am able to{" "} <span className="text-lime-400 font-helv"> align IT needs with the strategic objectives of the company</span>. I am adaptable and{" "} <span className="text-lime-400 font-helv">solution-oriented</span>, always ready to face new challenges with a practical and collaborative approach, driving{" "} <span className="text-lime-400 font-helv"> results that add value </span>{" "} and growth.
                    </motion.h1>
                </div>
            </div>
        </section>
      );
    };

export default About


