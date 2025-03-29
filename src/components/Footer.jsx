import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart, FaCode, FaDownload } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gray-50 dark:bg-black/90 py-10 border-t border-gray-200 dark:border-primary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-primary dark:text-primary cursor-pointer"
            >
              Karthikeya Tadiparti
            </button>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-md">
              A passionate MERN stack developer specializing in creating beautiful, responsive web applications with modern technologies.
            </p>
            
            <div className="flex space-x-5 mt-6">
              <a 
                href="https://github.com/KarthikeyaTadiparti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-xl transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/karthikeya10/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-xl transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:kartikeyatadiparti@gmail.com" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-xl transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            
            <div className="mt-6">
              <a 
                href="/resume/KarthikeyaTadiparti_CV.pdf" 
                download="KarthikeyaTadiparti_CV.pdf"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300"
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 text-left">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors duration-300 flex items-center justify-start w-full"
                >
                  <span className="h-1 w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors duration-300 flex items-center justify-start w-full"
                >
                  <span className="h-1 w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors duration-300 flex items-center justify-start w-full"
                >
                  <span className="h-1 w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors duration-300 flex items-center justify-start w-full"
                >
                  <span className="h-1 w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaEnvelope className="mr-3 text-primary" />
                <a href="mailto:kartikeyatadiparti@gmail.com" className="hover:text-primary dark:hover:text-primary transition-colors duration-300">
                  kartikeyatadiparti@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaPhone className="mr-3 text-primary" />
                <a href="tel:+918919305582" className="hover:text-primary dark:hover:text-primary transition-colors duration-300">
                  +91 8919305582
                </a>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-primary" />
                Visakhapatnam, Andhra Pradesh
              </li>
            </ul>
          </div>
        </div>
        
       
      </div>
    </footer>
  );
};

export default Footer; 