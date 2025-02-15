import React, { useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
import teste2 from '../assets/teste2.png';
import { useScreen } from '@/context/ScreenContext';
import angular from '../assets/angular.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import node from '../assets/nodejs.png'
import react from '../assets/react.png'
import tail from '../assets/tail.png'
import ts from '../assets/ts.png'
import azure from '../assets/azure.jpg'

interface Icon {
  src: string;
  alt: string;
}

const icons: Icon[] = [
  { src: angular, alt: 'Angular' },
  { src: html, alt: 'HTML' },
  { src: js, alt: 'JavaScript' },
  { src: node, alt: 'Node.js' }, 
  { src: react, alt: 'React' },
  { src: tail, alt: 'Tailwind' },
  { src: ts, alt: 'TypeScript' },
  { src: azure, alt: 'Azure' },
];

const AnimationIcons: React.FC = () => {
  const [servicesContainerRef, animate] = useAnimate();
  const servicesContainerIsInView = useInView(servicesContainerRef, { margin: '0px 0px -200px 0px'});
  const { isGiantScreen } = useScreen();

  useEffect(() => {
    if (servicesContainerIsInView) {
      animate(
        servicesContainerRef.current,
        { scale: 1 },
        { type: 'spring', stiffness: 50, damping: 10 }
      );
    }
  }, [servicesContainerIsInView]);

  return (
<section id="space" className="flex items-center mt-12">
    <section className="relative flex flex-wrap items-center justify-center w-full h-full gap-14">
      <img src={teste2} alt="teste2" className="w-auto max-h-[40rem] z-10" />
      <motion.div
        className={`${ isGiantScreen ? "h-[50rem] w-[50rem] mr-28" : "max-h-[70rem] max-w-[70rem] w-8/12 left-[12%] " } absolute  aspect-square z-10 `}
        ref={servicesContainerRef}
        initial={{ scale: 0 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        animate={{ rotate: 360 }}      >
       
        {/* Linha pontilhada ao redor do círculo ajustada */}
        <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-dotted border-blue-500 top-[10%] left-[10%]"></div>
        <motion.div className="absolute w-full h-full">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="absolute w-[30px] h-[30px] lg:w-[70px] lg:h-[80px] z-0"
              style={{
                top: `${50 + 40 * Math.sin((index * 2 * Math.PI) / icons.length)}%`,
                left: `${50 + 40 * Math.cos((index * 2 * Math.PI) / icons.length)}%`,
                transform: `translate(-50%, -50%) rotate(${(index * 360) / icons.length}deg)`
              }}
            >
              <img src={icon.src} alt={icon.alt} className="min-w-full min-h-full" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  </section>
  );
};

export default AnimationIcons;
