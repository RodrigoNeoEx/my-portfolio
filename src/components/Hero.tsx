import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-start px-8 md:px-20">
      {/* Saudação e Nome */}
      <div className="space-y-4">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hello!!!
        </motion.h1>
        <motion.h2
          className="text-5xl md:text-7xl font-bold leading-tight text-lime-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          I'm Rodrigo <span className="text-white">'NeoEx'</span>
        </motion.h2>
      </div>

      {/* Profissão e Bloco Adicional */}
      <div className="flex flex-col md:flex-row justify-between w-full mt-8">
        <motion.div
          className="text-xl md:text-2xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>FrontEnd Web Developer</p>
        </motion.div>

        {/* Bloco "Available to Work" */}
        <motion.div
          className="mt-8 md:mt-0 bg-transparent border-2 border-lime-400 rounded-xl p-4 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-3xl font-bold">23</p>
          <p>Available to Work</p>
        </motion.div>
      </div>

      {/* Descrição */}
      <motion.p
        className="mt-12 text-base md:text-lg leading-relaxed text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Completely in love with effects, design, and all dynamics related to the front-end. <br />
        Currently studying Full Stack Web Development and looking for new challenges/jobs in the WebDev market.
      </motion.p>
    </section>
  );
};

export default Hero;
