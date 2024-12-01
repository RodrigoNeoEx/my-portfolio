import Cards from "../genericComponents/Cards"

const Portfolio = () => {
    const projects = [
      { name: 'Projeto 1', description: 'Descrição do Projeto 1' },
      { name: 'Projeto 2', description: 'Descrição do Projeto 2' },
      { name: 'Projeto 3', description: 'Descrição do Projeto 3' },
      { name: 'Projeto 1', description: 'Descrição do Projeto 1' },
      { name: 'Projeto 2', description: 'Descrição do Projeto 2' },
      { name: 'Projeto 3', description: 'Descrição do Projeto 3' },
      { name: 'Projeto 1', description: 'Descrição do Projeto 1' },
      { name: 'Projeto 2', description: 'Descrição do Projeto 2' },
      { name: 'Projeto 3', description: 'Descrição do Projeto 3' },
    ];
  
    return (
      <section id="portfolio" className="bg-gradient-to-b from-black to-white">
        <Cards />        
        <div className="container mx-auto text-center py-32">
          <h2 className="text-5xl font-bold mb-8 text-lime-400 font-sten">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black shadow-md rounded-lg p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold font-sten text-white">{project.name}</h3>
                <p className="mt-2 text-lime-400 font-sten">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  