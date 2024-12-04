import { useEffect } from 'react';
import videoT from './dados formando o mundo.mp4'

type VideoProps = {
  onLoaded: () => void;
}

const Video = ({ onLoaded } : VideoProps ) => {
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
      className="absolute top-16 right-0 h-screen w-1/2"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    > 
      <defs>
        <clipPath id="cutout">
          <polygon points="0,0 100,0 100,100 30,100" />
        </clipPath>
      </defs>
      <foreignObject
        width="100%"
        height="92%"
        clipPath="url(#cutout)"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted          
        >
          <source src={videoT} type="video/mp4" />
        </video>
      </foreignObject>
    </svg>
  )
}

export default Video;
