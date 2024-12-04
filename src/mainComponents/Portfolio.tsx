import { useEffect, useState } from 'react';
import api from '../assets/fakeAPI';
import Cards from '../genericComponents/Cards';
import Projects from '@/genericComponents/Projects';

interface PortfolioData {
  portfolio: { title: string; body: string; button: string, functionId: string; link: string; }[];
}


const Portfolio = () => {  
  const [cards, setCards] = useState<{ title: string; body: string; button: string; functionId: string; link: string; }[]>([]);
  const [projectType, setProjectType] = useState('null')
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const handleClick = (functionId: string) => {
    setIsVisible(false); 
    setProjectType(functionId); 
    setIsVisible(true);
    const section = document.getElementById("projectsSection");
    setTimeout(() => {
      if (section) {
        
        return section.scrollIntoView({ behavior: 'smooth' });
      } 
    }, 200); 
  };
  
  useEffect(() => {
    api.get<PortfolioData>('/portfolioCards').then((response) => {
      setCards(response.data.portfolio); 
    });
  }, []);

  
    return (
      <>
        <section id="portfolio" className="bg-gradient-to-b from-black to-white">          
          <div className="container mx-auto text-center py-32 w-full">
            <h2 className="text-6xl font-bold mb-8 text-lime-400 font-sten">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {cards.map((itens, index) => (
                <Cards 
                  key={index}
                  cardTitle={itens.title}
                  cardBodyText={itens.body}
                  cardButtonText={itens.button}               
                  buttonFunction={() => handleClick(itens.functionId)}
                  cardLink={itens.link || '#'}
                />
              ))}
            </div>
          </div>        
        </section>

        <div
          id="projectsSection" 
          className={`transition-all duration-700 ease-in-out overflow-hidden pt-10
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >

        {projectType != 'null' && <Projects workType={projectType} />}
        </div>
      </>
    );
  };
  
  export default Portfolio;
  