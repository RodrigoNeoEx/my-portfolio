const Portfolio = () => {
    const projects = [
      { name: 'Projeto 1', description: 'Descrição do Projeto 1' },
      { name: 'Projeto 2', description: 'Descrição do Projeto 2' },
      { name: 'Projeto 3', description: 'Descrição do Projeto 3' },
    ];
  
    return (
      <section id="portfolio" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  