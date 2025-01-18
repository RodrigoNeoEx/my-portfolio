import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-4 min-w-[100vw] flex flex-row justify-around">
        <p>&copy; 2024 Rodrigo Neo. All rights reserved.</p>

        <span className="flex flex-row space-x-4">
          <a 
            href="https://www.linkedin.com/in/rodrigocamargo-neoex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl"/>
          </a>

          <a
            href="https://github.com/RodrigoNeoEx"
            target="_blank"
            rel="noopener noreferrer"
          >            
            <FaGithub className="text-2xl"/>
          </a>

          <a
            href="https://wa.me/5513991164296?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
            target="_blank"
            rel="noopener noreferrer"
          >            
            <FaWhatsapp className="text-2xl"/>
          </a>

        </span>
      </footer>
    );
  };
  
  export default Footer;
  