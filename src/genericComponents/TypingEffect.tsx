import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export interface TypingEffectProps {
  expertise: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ expertise }) => {
 

  return (
    <>
      <ReactTypingEffect
        text={expertise}
        speed={50}
        eraseSpeed={50}
        eraseDelay={1000}
        typingDelay={500}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{ color: "rgb(212 225 87 / var(--tw-text-opacity, 1))"}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};

export default TypingEffect;