import { ChevronRight } from "lucide-react"
import { statsData, resourcesData, categories } from "../../constants"

const hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-800 text-white pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Accelerate Your <span className="text-purple-300">Web3</span> Journey</h1>
            <p className="text-xl text-purple-100 leading-relaxed">Discover curated resources for developers, auditors, and professionals in the blockchain ecosystem.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#resources" 
              className="px-6 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-purple-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Resources
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-full hover:bg-white/10 transition duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map(stat => (
              <div key={stat.id} className="bg-purple-800/30 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
            <div className="relative bg-purple-800/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-500/30">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Featured Resources</h3>
                  <p className="text-purple-200 text-sm">Get started with these top Web3 learning materials</p>
                </div>
                
                {resourcesData.filter(r => r.featured).slice(0, 3).map(resource => (
                  <div key={resource.id} className="bg-purple-800/30 p-4 rounded-lg hover:bg-purple-700/40 transition duration-300">
                    <h4 className="font-medium mb-1">{resource.title}</h4>
                    <p className="text-purple-200 text-sm mb-2 line-clamp-1">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-purple-700/50 text-purple-100 px-2 py-0.5 rounded-full">
                        {categories.find(c => c.id === resource.category)?.name}
                      </span>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-100">
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
                
                <a href="#resources" className="block text-center text-sm text-purple-300 hover:text-purple-200">
                  View all resources →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Wave divider */}
    <div className="absolute w-full overflow-hidden leading-[0] -bottom-1">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
      </svg>
    </div>
  </div>
  )
}

export default hero
