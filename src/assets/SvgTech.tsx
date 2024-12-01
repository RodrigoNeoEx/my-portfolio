import { useEffect } from 'react';
import bg from './bgTech.jpg'

type SvgTech = {
  onLoaded: () => void;
}

const SvgTech = ({ onLoaded }: SvgTech) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoaded) {
        onLoaded();
      }
    }, 750);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <svg
      className="absolute left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 640" // Ajustado para proporções mobile
      preserveAspectRatio="none"
      
    >
      {/* Defina o Path para mascarar */}
      <defs>
        <clipPath id="customShape">
          {/* Path atualizado para aproximar-se do formato desejado */}
          <path d="M 1 206 Q 137 412 224 183 T 399 55 L 400 502 L 0 503 Z"/>

        </clipPath>
      </defs>

      {/* Aplicar imagem ao fundo com máscara */}
      <image
        href={bg} // Caminho correto da imagem
        width="100vh"
        height="100vh"
        clipPath="url(#customShape)"
        preserveAspectRatio="xMidYMid slice" 
      />
    </svg>
  );
};

export default SvgTech;


