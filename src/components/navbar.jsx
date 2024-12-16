const Navbar = () => {
  return (
    <nav className="h-16 text-xl flex justify-center items-center mb-4">
      <ul className="text-gray-400 flex cursor-pointer justify-center gap-8 ">
        <li className="hover:text-white transition-all duration-300">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-white transition-all duration-300">
          <a href="#projects">Portfolio</a>
        </li>
        <li className="hover:text-white transition-all duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
