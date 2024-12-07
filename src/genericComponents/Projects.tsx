import { motion } from 'framer-motion';
import Cards from './Cards'
import { useEffect, useState } from 'react';
import api from "../assets/fakeAPI"

type ProjectsProps = {
    workType: string;
}

interface FrontEndProps {
    frontEnd: {
        title: string; 
        body: string; 
        button: string;
        link: string;
        image: string;
    }[];
}

interface ProjectManangerProps {
    projectMananger: {
        title: string; 
        body: string; 
        button: string;
        link: string;
        image: string;
    }[],
}

const Projects = ({workType}: ProjectsProps) => {
    const [title, setTitle] = useState('')
    const [cards, setCards] = useState<{ title: string; body: string; button: string; link:string; image:string; }[]>([]);

    useEffect(() => {   
        workType === "frontEnd" 
        ? api.get<FrontEndProps>(`/frontProjects`).then((response) => {
            setTitle('FrontEnd Developer')
            return setCards(response.data.frontEnd); 
          })
        : api.get<ProjectManangerProps>(`/pmProjects`).then((response) => {
            setTitle('Mananger')
            return setCards(response.data.projectMananger); 

        });
      }, [workType]);

    return (
        <section className="bg-gradient-to-b from-white to-black">
            <div className="container mx-auto text-center pt-0 pb-24 w-full">
                <motion.h1 className="text-6xl font-bold mb-8 text-black font-sten">      
                    {`Projects as ${title}`}
                </motion.h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10 justify-items-center">
                {cards.map((itens, index) => (
                    <Cards 
                        key={index} 
                        cardTitle={itens.title}
                        cardBodyText={itens.body}
                        cardButtonText={itens.button}
                        cardLink={itens.link}
                        buttonFunction={() =>  window.open(itens.link, "_blank", "noopener,noreferrer")}
                        cardImage={itens.image} 
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;