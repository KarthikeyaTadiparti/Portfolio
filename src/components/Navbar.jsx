import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the navbar
      const navbarHeight = document.querySelector('nav').offsetHeight;
      
      // Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // Calculate the position to scroll to (element position + current scroll - navbar height)
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20; // Added extra 20px for padding
      
      // Smooth scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed w-full z-10 transition-all duration-300 backdrop-blur-md bg-white/90 dark:bg-black/80 border-b border-gray-200 dark:border-primary/20 shadow-sm dark:shadow-primary/10">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-5">
        <button 
          onClick={() => scrollToSection('home')} 
          className="text-2xl font-bold dark:text-white transition-colors duration-300 hover:opacity-80"
        >
          Karthikeya Tadiparti
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-100 font-medium hover:text-primary dark:hover:text-primary transition-colors duration-300 px-2 py-1 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm dark:shadow-primary/5 border dark:border-primary/10"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FaSun className="text-primary" /> : <FaMoon className="text-primary" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className="p-2.5 mr-4 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm dark:shadow-primary/5 border dark:border-primary/10"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FaSun className="text-primary" /> : <FaMoon className="text-primary" />}
          </button>

          <button
            onClick={toggleMenu}
            className="text-primary dark:text-primary focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 dark:bg-black/90 backdrop-blur-md py-4 border-t border-gray-200 dark:border-primary/20"
        >
          <ul className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-300 block w-full text-left py-2 font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 