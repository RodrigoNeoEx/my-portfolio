import { useEffect } from 'react';
import bg from '/assets/bgTech.jpg'
import videoT from './dados formando o mundo.mp4'

type imgSVGpathInterface = {
  onLoaded: () => void;
}

const ImgSVGpath = ({ onLoaded }: imgSVGpathInterface) => {
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
    // className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600" // Ajuste conforme necessário
    preserveAspectRatio="none"
  >
    {/* Defina o Path para mascarar */}
    <defs>
      <clipPath id="customImgShape">
        <path d="M 146 215 C 145 198 125 200 124 214 L 122 297 C -14 233 -7 41 163 47 L 161 157 C 161 177 183 178 183 159 L 183 53 C 310 83 333 342 147 302 Z" /> {/* Path Customizado */}
      </clipPath>
    </defs>

    {/* Aplicar imagem ao fundo com máscara */}
    <image
      href='/assets/bgTech.jpg' // Coloque aqui o caminho da sua imagem
      width="100%"
      height="100%"
      clipPath="url(#customImgShape)"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
  );
};

export default ImgSVGpath;


