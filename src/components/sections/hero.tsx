import { statsData } from "../../constants";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "Web3";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  const rotateStyle = {
    transform: `rotateY(${
      (mousePosition.x / window.innerWidth - 0.5) * 10
    }deg) rotateX(${(mousePosition.y / window.innerHeight - 0.5) * -10}deg)`,
  };

  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 right-0 h-96 w-96 bg-neon-purple opacity-10 blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-neon-blue opacity-10 blur-[100px] z-0" />

      {/* Animated matrix code effect in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0 pointer-events-none">
        <div className="matrix-effect absolute inset-0 text-neon-green text-opacity-30 font-mono text-sm">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <span
                  key={j}
                  className="block"
                  style={{
                    animationDelay: `${j * 0.1}s`,
                    opacity: Math.random(),
                  }}
                >
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animated floating elements */}
      <div
        className="absolute top-10 right-20 h-16 w-16 md:h-32 md:w-32 rounded-full border border-neon-pink opacity-20 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-60 right-40 h-8 w-8 md:h-16 md:w-16 rounded-full border border-neon-blue opacity-20 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-80 left-20 h-12 w-12 md:h-24 md:w-24 rounded-full border border-neon-purple opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-neon-green mr-2 animate-pulse"></span>
                Web3 Development Resources Hub
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Accelerate Your
                <span className="relative mx-2">
                  <span className="relative z-10 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                    {typedText}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-30 blur-md"></span>
                  <span
                    className="animate-pulse ml-0.5 inline-block h-8 w-1 bg-neon-pink"
                    style={{
                      display:
                        typedText.length === fullText.length
                          ? "none"
                          : "inline-block",
                    }}
                  ></span>
                </span>
                Journey
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Discover curated resources for developers, auditors, and
                professionals in the blockchain ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#resources"
                className="group px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium rounded-full shadow-neon-blue hover:shadow-neon transition-all duration-500 hover:-translate-y-1 flex items-center"
              >
                Explore Resources
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#roadmap"
                className="px-6 py-3 bg-transparent text-white border border-primary-500/30 backdrop-blur-sm font-medium rounded-full hover:bg-primary-500/10 transition-all duration-300"
              >
                View Roadmaps
              </a>

              <a
                href="https://chat.whatsapp.com/JBqrLwbQJF9Cwilajd5Moo"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-neon-green to-neon-blue text-white font-medium rounded-full shadow-neon-green hover:shadow-neon transition-all duration-500 hover:-translate-y-1 flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Join telegram
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statsData.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-cyber-light/30 backdrop-blur-sm p-4 rounded-xl border border-primary-500/20 transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block md:col-span-2">
            <div
              className="relative perspective-1000 transition-transform duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="relative bg-cyber-light/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-primary-500/30 transition-transform duration-300 ease-out"
                style={rotateStyle}
              >
                <div className="absolute inset-0 bg-cyber-grid rounded-2xl opacity-10" />
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-neon-purple opacity-20 blur-[50px]" />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-neon-blue opacity-20 blur-[50px]" />

                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-neon-pink"></span>
                      <span className="w-3 h-3 rounded-full bg-neon-blue"></span>
                      <span className="w-3 h-3 rounded-full bg-neon-green"></span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Featured Resources
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Get started with these top Web3 learning materials
                    </p>
                  </div>

                 
                    <div className="space-y-4">
                      <div className="bg-cyber-dark/60 p-4 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 cursor-pointer">
                        <a href="https://docs.soliditylang.org/">
                          <h4 className="font-medium text-neon-purple mb-1">
                            Solidity Documentation
                          </h4>
                          <p className="text-gray-300 text-sm mb-2 line-clamp-1">
                            Official documentation for Solidity, the smart
                            contract programming language for Ethereum.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded-full">
                              Solidity
                            </span>
                            <button className="text-neon-blue hover:text-white transition-colors duration-300">
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </a>
                      </div>

                      <div className="bg-cyber-dark/60 p-4 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                        <a href="https://doc.rust-lang.org/stable/">
                          <h4 className="font-medium text-neon-blue mb-1">
                            Rust Book
                          </h4>
                          <p className="text-gray-300 text-sm mb-2 line-clamp-1">
                            The official Rust programming language book.
                            Comprehensive guide to the language fundamentals.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded-full">
                              Rust
                            </span>
                            <button className="text-neon-blue hover:text-white transition-colors duration-300">
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </a>
                      </div>
                    </div>
              

                  <a
                    href="#resources"
                    className="block text-center text-sm text-neon-purple hover:text-neon-blue transition-colors duration-300"
                  >
                    View all resources →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Matrix animation styles */}
      <style>
        {`
          @keyframes matrixDrop {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          
          .matrix-column {
            position: absolute;
            top: 0;
            animation: matrixDrop linear infinite;
            white-space: nowrap;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
