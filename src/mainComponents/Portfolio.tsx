import { useEffect, useState } from 'react';
import api from '../assets/fakeAPI';
import Cards from '../genericComponents/Cards';

const Portfolio = () => {  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get('/portfolioCards').then((response) => {
      setCards(response.data.portfolio); 
    });
  }, []);
  
    return (
      <section id="portfolio" className="bg-gradient-to-b from-black to-white">          
        <div className="container mx-auto text-center py-32 w-full">
          <h2 className="text-5xl font-bold mb-8 text-lime-400 font-sten">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {cards.map((itens, _) => (
              <Cards cardTitle={itens.title} cardBodyText={itens.body} cardButtonText={itens.button} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  