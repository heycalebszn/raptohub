import { ArrowUpRight } from "lucide-react";
import { Resource } from "../../types";

export const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div 
      className={`group relative bg-cyber-light/20 rounded-xl backdrop-blur-sm transition-all duration-300 border border-primary-500/20 hover:border-primary-500/40 overflow-hidden flex flex-col h-full`}
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-20 blur-xl rounded-xl"></div>
      </div>
      
      {/* Featured indicator */}
      {resource.featured && (
        <div className="absolute top-3 right-3 flex space-x-1">
          <span className="animate-pulse w-2 h-2 rounded-full bg-neon-pink"></span>
          <span className="animate-pulse w-2 h-2 rounded-full bg-neon-blue" style={{ animationDelay: '0.5s' }}></span>
        </div>
      )}
      
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors duration-300">{resource.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 flex-grow">{resource.description}</p>
        
        {resource.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {resource.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-primary-500/10 text-primary-300 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-neon-blue font-medium hover:text-neon-purple group-hover:translate-x-1 transition-transform duration-300"
        >
          Visit Resource <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      {/* Border glow effect on featured resources */}
      {resource.featured && (
        <div className="absolute inset-0 rounded-xl border border-neon-purple opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      )}
    </div>
  );
};