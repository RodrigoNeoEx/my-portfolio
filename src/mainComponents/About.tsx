
import { motion } from "framer-motion"
import { useScreen } from "../context/ScreenContext";

const About = () => {
    const { isMobile, vertical, isLoaded, setIsLoaded, horizontalMob } = useScreen(); 
    return (
        <section className="bg-black py-16 px-8">
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
                        Como profissional sou{" "}
                        <span className="text-lime-400 font-helv">dinâmico</span>, com
                        experiência em gestão de projetos de TI e{" "}
                        <span className="text-lime-400 font-helv">
                        forte habilidade em comunicação e trabalho em equipe
                        </span>
                        . Com uma visão integrada dos negócios, adquirida através de
                        passagens por diferentes áreas, consigo{" "}
                        <span className="text-lime-400 font-helv">
                        conectar necessidades de TI aos objetivos estratégicos da empresa
                        </span>
                        . Sou adaptável e{" "}
                        <span className="text-lime-400 font-helv">focado em soluções</span>
                        , sempre pronto para enfrentar novos desafios com uma abordagem
                        prática e colaborativa, promovendo{" "}
                        <span className="text-lime-400 font-helv">
                        resultados que agregam valor
                        </span>{" "}
                        e impulsionam.
                    </motion.h1>
                </div>
            </div>
        </section>
      );
    };

export default About


