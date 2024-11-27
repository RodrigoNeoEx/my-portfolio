const StaticHeader = () => {
    return (
      <header className="bg-black text-white py-4 px-8 fixed top-0 left-0 w-full z-50 text-3xl">
        <nav className="flex justify-center items-center">          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-lime-400">Home</a>
            <a href="#about" className="hover:text-lime-400">About</a>
            <a href="#projects" className="hover:text-lime-400">Projects</a>
            <a href="#contact" className="hover:text-lime-400">Contact</a>
          </div>
        </nav>
      </header>
    );
  };
  
  export default StaticHeader;
  