import { MessageSquare, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [copied, setCopied] = useState(false);
  const whatsAppLink = "https://chat.whatsapp.com/JBqrLwbQJF9Cwilajd5Moo";
  
  const handleCopy = () => {
    navigator.clipboard.writeText(whatsAppLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-cyber-darker z-0" />
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-20 z-0" />
      <div className="absolute top-0 right-0 w-2/3 h-96 bg-neon-purple opacity-10 blur-[120px] z-0 transform rotate-12" />
      
      {/* Animated elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border border-neon-blue rounded-full opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-10 left-20 w-32 h-32 border border-neon-pink rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute -bottom-20 right-20 w-40 h-40 border-2 border-neon-green rounded-full opacity-10 animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glassmorphism rounded-2xl p-1 overflow-hidden">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple rounded-2xl opacity-30 blur-sm animate-glow"></div>
          
          <div className="relative rounded-2xl overflow-hidden bg-cyber-light/10 backdrop-blur-md">
            <div className="absolute inset-0 bg-cyber-grid opacity-10" />
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left space-y-4 max-w-2xl">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Connect With Us
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Join Our <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">WhatsApp</span> Community
                  </h2>
                  <p className="text-gray-300">
                    Connect with fellow developers, share resources, ask questions, and collaborate on projects.
                    Join our growing community of Web3 enthusiasts and blockchain professionals.
                  </p>
                  
                  {/* WhatsApp QR code or visual element */}
                  <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-32 h-32 bg-white p-2 rounded-lg relative overflow-hidden shadow-neon-green">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-green to-neon-blue opacity-20"></div>
                      <div className="relative z-10 grid grid-cols-4 grid-rows-4 gap-1 w-full h-full">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'} rounded-sm`}></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-black font-medium">Scan Me</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 w-full">
                      <div 
                        onClick={handleCopy}
                        className="w-full py-3 px-4 bg-cyber-dark/60 border border-primary-500/20 rounded-lg flex items-center justify-between cursor-pointer hover:border-primary-500/40 transition-all duration-300"
                      >
                        <span className="text-sm text-gray-300 truncate">
                          {whatsAppLink.substring(0, 30)}...
                        </span>
                        <button className="text-neon-green">
                          {copied ? <Check className="h-4 w-4" /> : "Copy"}
                        </button>
                      </div>
                      
                      <a 
                        href={whatsAppLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center justify-center px-8 py-3 bg-gradient-to-r from-neon-green to-neon-blue text-white font-semibold rounded-lg shadow-neon-blue hover:shadow-neon-green transition-all duration-300 hover:-translate-y-1"
                      >
                        Join WhatsApp Group
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Community counter */}
        <div className="mt-6 text-center">
          <div className="inline-block bg-cyber-light/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-500/20">
            <span className="text-neon-green font-bold">236+</span>
            <span className="text-gray-300 ml-2">developers already joined</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
