import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../constants';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <div id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 right-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm mb-4">
            <Quote className="h-4 w-4 mr-2" />
            Testimonials
          </div>
          <h2 className="text-4xl font-bold mb-4">
            What <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">Developers</span> Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear from developers who have accelerated their Web3 journey with our resources.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl glassmorphism rounded-2xl p-1">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-30 blur-sm group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative rounded-2xl overflow-hidden">
            <div className="carousel relative w-full h-full">
              <div className="relative overflow-hidden glassmorphism rounded-xl">
                {/* Testimonial content */}
                <div className="p-8 md:p-12">
                  <div className="absolute top-4 left-4 text-neon-purple opacity-30">
                    <Quote className="h-20 w-20" />
                  </div>
                  
                  <div className="relative z-10">
                    <blockquote className="text-xl md:text-2xl font-medium mb-8 px-6">
                      "{testimonials[activeIndex].text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500/20 text-neon-purple text-xl font-bold">
                        {testimonials[activeIndex].author.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white">{testimonials[activeIndex].author}</div>
                        <div className="text-sm text-primary-300">{testimonials[activeIndex].role}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  <button 
                    onClick={prev}
                    className="p-2 rounded-full bg-cyber-dark/80 hover:bg-neon-purple/20 border border-primary-500/30 text-white transition-all duration-300"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={next}
                    className="p-2 rounded-full bg-cyber-dark/80 hover:bg-neon-purple/20 border border-primary-500/30 text-white transition-all duration-300"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-neon-purple w-6" 
                    : "bg-primary-500/30 hover:bg-primary-500/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
