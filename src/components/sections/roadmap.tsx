import { useState } from 'react';
import { Code, Database, Layers, ChevronRight, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const roadmaps = {
    frontend: {
      title: "Frontend Development Roadmap",
      icon: <Code className="h-6 w-6 text-neon-blue" />,
      description: "Master the skills needed to build stunning and functional Web3 interfaces",
      levels: [
        {
          title: "Beginner",
          color: "neon-blue",
          steps: [
            "HTML, CSS & JavaScript fundamentals",
            "React.js basics and component architecture",
            "State management with Context API/Redux",
            "UI libraries and responsive design",
            "Web3 concepts and blockchain basics"
          ]
        },
        {
          title: "Intermediate",
          color: "neon-purple",
          steps: [
            "Web3.js/Ethers.js integration",
            "Wallet connections (MetaMask, WalletConnect)",
            "Smart contract interaction from frontend",
            "Transaction handling and error management",
            "Client-side data caching and optimization"
          ]
        },
        {
          title: "Advanced",
          color: "neon-pink",
          steps: [
            "Complex DeFi interfaces and dashboards",
            "NFT marketplace UIs and interactions",
            "Cross-chain application development",
            "Data visualization for blockchain data",
            "Advanced state management patterns"
          ]
        }
      ]
    },
    backend: {
      title: "Backend Development Roadmap",
      icon: <Database className="h-6 w-6 text-neon-green" />,
      description: "Develop secure and efficient smart contracts and blockchain systems",
      levels: [
        {
          title: "Beginner",
          color: "neon-green",
          steps: [
            "Solidity/Rust programming fundamentals",
            "Smart contract development environments",
            "Basic contract structures and patterns",
            "Testing frameworks introduction",
            "Deployment to testnets"
          ]
        },
        {
          title: "Intermediate",
          color: "neon-blue",
          steps: [
            "Advanced smart contract patterns",
            "Security considerations and best practices",
            "Gas optimization techniques",
            "Comprehensive testing and automation",
            "Contract upgradeability patterns"
          ]
        },
        {
          title: "Advanced",
          color: "neon-purple",
          steps: [
            "Oracle integration and external data",
            "Layer 2 solutions and scaling techniques",
            "Cross-chain protocol development",
            "Advanced governance mechanisms",
            "Formal verification and auditing"
          ]
        }
      ]
    },
    fullstack: {
      title: "Full Stack Development Roadmap",
      icon: <Layers className="h-6 w-6 text-neon-yellow" />,
      description: "Become a complete Web3 developer with end-to-end application skills",
      levels: [
        {
          title: "Beginner",
          color: "neon-yellow",
          steps: [
            "Blockchain fundamentals and concepts",
            "Introduction to Web3 stack",
            "Basic smart contract development",
            "Simple frontend integration",
            "Local development environment setup"
          ]
        },
        {
          title: "Intermediate",
          color: "neon-green",
          steps: [
            "Full dApp architecture and design",
            "Frontend and smart contract integration",
            "Testing across the stack",
            "User authentication and authorization",
            "IPFS and decentralized storage"
          ]
        },
        {
          title: "Advanced",
          color: "neon-blue",
          steps: [
            "End-to-end decentralized application architecture",
            "Serverless backends and edge computing",
            "Multi-chain application development",
            "Performance optimization and scaling",
            "DevOps for blockchain applications"
          ]
        }
      ]
    }
  };
  
  const currentRoadmap = roadmaps[activeTab as keyof typeof roadmaps];

  return (
    <div id="roadmap" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 right-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-neon-pink mr-2"></span>
            Development Paths
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Web3 <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Development</span> Roadmaps
          </h2>
          <p className="text-lg text-gray-300">
            Follow our structured learning paths to become a professional Web3 developer in your chosen specialization
          </p>
        </div>
        
        {/* Tabs for different roadmaps */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(roadmaps).map(([key, roadmap]) => (
            <button
              key={key}
              className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                activeTab === key
                  ? `bg-${roadmap.levels[0].color}/20 text-${roadmap.levels[0].color} border border-${roadmap.levels[0].color}/40`
                  : "bg-cyber-light/20 text-gray-300 border border-primary-500/10 hover:border-primary-500/30"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {roadmap.icon}
              <span>{roadmap.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>
        
        {/* Current roadmap */}
        <div className="glassmorphism rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-10" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              {currentRoadmap.icon}
              <h3 className="text-2xl font-bold">{currentRoadmap.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-10">{currentRoadmap.description}</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {currentRoadmap.levels.map((level, index) => (
                <div 
                  key={index} 
                  className={`relative p-6 bg-cyber-light/10 backdrop-blur-sm rounded-xl border border-${level.color}/30 overflow-hidden group hover:border-${level.color}/50 transition-all duration-300`}
                >
                  {/* Background glow */}
                  <div className={`absolute -inset-1 bg-${level.color}/5 blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className={`text-xl font-semibold text-${level.color}`}>{level.title}</h4>
                      <span className={`text-xs bg-${level.color}/10 text-${level.color} px-2 py-0.5 rounded-full`}>
                        Level {index + 1}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {level.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className={`h-5 w-5 text-${level.color} shrink-0 mt-0.5`} />
                          <span className="text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 text-center">
                      <a 
                        href="#resources"
                        className={`inline-flex items-center text-${level.color} hover:underline`}
                      >
                        View resources
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap; 