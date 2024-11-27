import { useState } from 'react';

const Header = () => {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
      {/* Logotipo */}
      <div className="flex items-center">
        <div className="bg-lime-400 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-black font-bold text-lg">N</span>
        </div>
      </div>

      {/* Links de Navegação */}
      <nav>
        <ul className="flex space-x-8">
          {['Home', 'Contact', 'All Projects'].map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition ${
                hover === item ? 'text-lime-400' : 'text-white'
              }`}
              onMouseEnter={() => setHover(item)}
              onMouseLeave={() => setHover(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
