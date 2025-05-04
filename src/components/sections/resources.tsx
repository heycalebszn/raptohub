import { Search } from "lucide-react"
import { categories, resourcesData } from "../../constants"
import { ResourceCard } from "../ui/cards"
import { useState } from "react";

const Resources = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredResources = resourcesData
    .filter(resource => 
      (selectedCategory === "all" || resource.category === selectedCategory) &&
      (searchTerm === "" || 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    );
  return (
    <div id="resources" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-dark bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 left-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-neon-blue mr-2"></span>
            Browse Our Collection
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Curated <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Web3</span> Resources
          </h2>
          <p className="text-lg text-gray-300">
            Discover the best learning materials, documentation, and tools to accelerate your blockchain development journey.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-primary-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-3 w-full bg-cyber-light/30 backdrop-blur-sm border border-primary-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent text-white placeholder-gray-400"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary-500/20 text-neon-purple border border-primary-500/40"
                      : "bg-cyber-light/20 text-gray-300 border border-primary-500/10 hover:border-primary-500/30 hover:bg-cyber-light/30"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-cyber-light/20 backdrop-blur-sm rounded-xl border border-primary-500/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-cyber-light/30 mb-4">
              <Search className="h-8 w-8 text-primary-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Resources
