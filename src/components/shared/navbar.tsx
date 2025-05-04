import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-purple-700' : 'text-white'}`}>
              Rapto<span className="text-purple-500">Hub</span>
            </span>
          </div>
          <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
            <a href="#" className={`px-2 py-1 text-sm font-medium hover:text-purple-500 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</a>
            <a href="#resources" className={`px-2 py-1 text-sm font-medium hover:text-purple-500 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Resources</a>
            <a href="#about" className={`px-2 py-1 text-sm font-medium hover:text-purple-500 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</a>
            <a href="#testimonials" className={`px-2 py-1 text-sm font-medium hover:text-purple-500 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Testimonials</a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#hire" className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-purple-700 text-white hover:bg-purple-800'
              : 'bg-white text-purple-700 hover:bg-purple-50'
          }`}>
            Hire the Developer
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <button 
            className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'} hover:bg-purple-100 hover:text-purple-700 focus:outline-none transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
    
    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white shadow-lg rounded-b-xl">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#resources" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#hire" 
            className="block px-3 py-2 text-base font-medium text-purple-700 hover:text-purple-800 hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire the Developer
          </a>
        </div>
      </div>
    )}
  </nav>
  )
}

export default navbar
