import { ExternalLink } from "lucide-react";
import { Resource } from "../../types";

export const ResourceCard = ({ resource }: { resource: Resource }) => {
    return (
      <div className={`group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border ${resource.featured ? 'border-purple-300' : 'border-gray-100'} overflow-hidden flex flex-col h-full`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{resource.title}</h3>
            {resource.featured && (
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Featured
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
          
          {resource.tags && (
            <div className="flex flex-wrap gap-1 mb-4">
              {resource.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <a 
            href={resource.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center text-purple-700 font-medium hover:text-purple-900 transition-colors duration-300"
          >
            Visit Resource <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    );
};