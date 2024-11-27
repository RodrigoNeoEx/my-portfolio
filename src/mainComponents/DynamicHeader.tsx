import { useState, useEffect } from 'react';
import HamburguerHeader from '@/genericComponents/HamburguerHeader';
import StaticHeader from '@/genericComponents/StaticHeader';


const DynamicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detecta a rolagem da página
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 199);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itens = {
    name: ["Home", "About", "Projects", "Contact"]
  }
  
  return (
    <div className="relative">      
      <div
        className={`transition-opacity duration-500 ${
          isMobile || isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <StaticHeader />
      </div>
      <div
        className={`transition-opacity duration-500 ${
          isMobile || isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <HamburguerHeader lineText={itens.name} mobile={isMobile}/>
      </div>
    </div>
  );

  // Renderiza o StaticHeader em desktop sem rolagem
};

export default DynamicHeader;
