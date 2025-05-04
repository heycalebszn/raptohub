import { Code, Shield, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      id: 1,
      icon: <Code className="h-6 w-6 text-neon-blue" />,
      title: "Developer-Focused",
      description: "Curated resources specifically selected for blockchain developers at all skill levels, from beginners to experts."
    },
    {
      id: 2,
      icon: <Shield className="h-6 w-6 text-neon-purple" />,
      title: "Security-First",
      description: "Emphasis on best practices, security considerations, and audit resources to build secure Web3 applications."
    },
    {
      id: 3,
      icon: <Globe className="h-6 w-6 text-neon-pink" />,
      title: "Ecosystem-Wide",
      description: "Coverage across multiple blockchain ecosystems including Ethereum, Solana, TON, and emerging platforms."
    }
  ];

  return (
    <div id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-dark bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 left-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-neon-pink mr-2"></span>
                About Our Platform
              </div>
              
              <h2 className="text-4xl font-bold">
                Accelerating the <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Web3</span> Revolution
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                RaptoHub is a curated platform dedicated to helping developers navigate the rapidly evolving blockchain ecosystem. 
                Our mission is to provide high-quality resources that accelerate learning and development in the Web3 space.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map(feature => (
                <div 
                  key={feature.id} 
                  className="flex p-4 glassmorphism rounded-xl hover:border-primary-500/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-cyber-darker rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <a 
                href="#resources" 
                className="group inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300"
              >
                Explore our resources 
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-neon-blue rounded-full opacity-10 animate-pulse-slow" />
            <div className="absolute -bottom-5 -left-5 w-20 h-20 border border-neon-pink rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
            
            <div className="relative glassmorphism rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-cyber-grid opacity-20" />
              
              <div className="p-8 relative z-10">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Web3 Roadmap</h3>
                    <div className="flex space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-neon-pink"></span>
                      <span className="w-3 h-3 rounded-full bg-neon-blue"></span>
                      <span className="w-3 h-3 rounded-full bg-neon-green"></span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-neon-blue">Beginner</h4>
                        <span className="text-xs bg-neon-blue/10 text-neon-blue px-2 py-0.5 rounded-full">Step 1</span>
                      </div>
                      <div className="bg-cyber-darker/60 p-3 rounded-lg border border-primary-500/10">
                        <p className="text-sm text-gray-300">Learn blockchain fundamentals, solidity basics, and simple smart contract development</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-neon-purple">Intermediate</h4>
                        <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-0.5 rounded-full">Step 2</span>
                      </div>
                      <div className="bg-cyber-darker/60 p-3 rounded-lg border border-primary-500/10">
                        <p className="text-sm text-gray-300">Build DApps, learn testing frameworks, and enhance your smart contract security knowledge</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-neon-pink">Advanced</h4>
                        <span className="text-xs bg-neon-pink/10 text-neon-pink px-2 py-0.5 rounded-full">Step 3</span>
                      </div>
                      <div className="bg-cyber-darker/60 p-3 rounded-lg border border-primary-500/10">
                        <p className="text-sm text-gray-300">Master gas optimization, audit techniques, and specialized blockchain development</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="#resources" 
                  className="block text-center py-3 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-lg text-white font-medium transition-all duration-300 hover:shadow-neon"
                >
                  Follow the Roadmap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
