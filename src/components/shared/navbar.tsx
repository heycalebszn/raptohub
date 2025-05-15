import { X, Menu, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Optional: Update active section based on scroll position
      const sections = ["home", "resources", "about", "testimonials", "hire"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Resources", href: "#resources" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-2 bg-cyber-dark/85 backdrop-blur-md shadow-[0_0_20px_rgba(74,222,255,0.15)]' 
        : 'py-4 bg-transparent'
    }`}>
      {/* Animated border effect */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-70"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent transition-all duration-300">
                Web3<span className="text-neon-pink">Nest</span>
              </span>
              {/* Animated dot */}
              <span className="ml-1 inline-block w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            </div>
            
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? 'text-neon-blue' 
                      : 'text-gray-300 hover:text-neon-purple'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-neon-blue rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {/* <a 
              href="https://github.com/raptohub" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-neon-blue transition-all duration-300"
            >
              <div className="flex items-center gap-1">
                <span>GitHub</span> 
                <ExternalLink className="h-3 w-3" />
              </div>
            </a> */}
            
            <a 
              href="#hire"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(138,75,255,0.5)] hover:-translate-y-0.5"
            >
              Hire the Developer
            </a>
          </div>
          
          <div className="flex items-center md:hidden">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-neon-blue focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - glassmorphism effect */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism p-1 mt-2 mx-3 rounded-xl">
          <div className="relative rounded-lg overflow-hidden bg-cyber-dark/80 backdrop-blur-md">
            <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue opacity-10 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-purple opacity-10 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 px-3 py-3 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'bg-cyber-light/30 text-neon-blue border-l-2 border-neon-blue pl-2' 
                      : 'text-gray-300 hover:bg-cyber-light/20 hover:text-neon-purple'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 mt-4 border-t border-primary-500/20 flex flex-col space-y-3">
                <a 
                  href="https://github.com/raptohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-neon-blue hover:bg-cyber-light/20 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                
                <a 
                  href="#hire"
                  className="block text-center px-3 py-2 text-base font-medium bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire the Developer
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
