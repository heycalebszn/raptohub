import { useState, useEffect } from 'react';
import { Search, Code, Shield, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import { categories, resourcesData, statsData, testimonials } from '../constants';
import { ResourceCard } from '../components/ui/cards';

export default function RaptoHub() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    <div className="flex flex-col min-h-screen">
      {/* NavBar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-purple-700' : 'text-white'}`}>
                  Web3<span className="text-purple-500">Nest</span>
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

      {/* Hero Section */}
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

      {/* Resources Section */}
      <div id="resources" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated <span className="text-purple-700">Web3</span> Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the best learning materials, documentation, and tools to accelerate your blockchain development journey.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-3 w-full bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-purple-100 text-purple-700 border border-purple-200"
                        : "bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100"
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
            <div className="text-center py-12">
              <p className="text-gray-500">No resources found matching your criteria. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About <span className="text-purple-700">RaptoHub</span></h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  RaptoHub is dedicated to accelerating Web3 adoption by curating high-quality resources that help developers, auditors, and professionals navigate the blockchain ecosystem.
                </p>
                <p className="text-lg">
                  Our mission is to lower the barriers to entry for Web3 development and empower the next generation of blockchain innovators with the knowledge and tools they need to succeed.
                </p>
                <p className="text-lg">
                  Whether you're learning Solidity for Ethereum, Rust for substrate-based chains, FunC for TON, or seeking job opportunities in the Web3 ecosystem, RaptoHub provides carefully selected resources to support your journey.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-xl">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Code className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Developer-Focused</h4>
                    <p className="text-sm text-gray-500">Resources selected by developers, for developers</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-xl">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Security-First</h4>
                    <p className="text-sm text-gray-500">Emphasis on best practices and secure coding</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl transform -rotate-2 opacity-10 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-gray-900">Why RaptoHub?</h3>
                    <p className="text-gray-600">What makes our platform valuable for Web3 enthusiasts</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-purple-100 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-purple-700 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Curated Quality</h4>
                        <p className="text-sm text-gray-600">Each resource is hand-picked and evaluated for quality and relevance</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-purple-100 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-purple-700 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Career Pathways</h4>
                        <p className="text-sm text-gray-600">Resources organized to help you build marketable Web3 skills</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-purple-100 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-purple-700 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Community Focus</h4>
                        <p className="text-sm text-gray-600">Building a network of Web3 enthusiasts and professionals</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 bg-purple-100 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-purple-700 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Always Free</h4>
                        <p className="text-sm text-gray-600">Committed to providing free access to quality Web3 education</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Users Are Saying</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              RaptoHub is helping people around the world succeed in their Web3 journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative ${
                  index === 1 ? 'md:transform md:-translate-y-8' : ''
                }`}
              >
                <div className="absolute top-4 left-4 text-purple-200 opacity-30">
                  <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4V8zm16 0c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 mb-6 relative">{testimonial.text}</p>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="font-medium text-purple-700">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#resources" className="inline-flex items-center px-6 py-3 bg-purple-50 text-purple-700 font-medium rounded-full hover:bg-purple-100 transition duration-300">
              Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to dive into Web3?</h2>
              <p className="text-purple-100 text-lg mb-8">
                Start your blockchain journey today with our curated resources and accelerate your path to becoming a Web3 professional.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#resources" 
                  className="px-6 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-purple-50 transition duration-300 shadow-lg"
                >
                  Get Started Now
                </a>
                <a 
                  href="#hire" 
                  className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-full hover:bg-white/10 transition duration-300"
                >
                  Hire Developer Help
                </a>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold mb-3">Newsletter</h3>
                <p className="text-purple-100 text-sm mb-4">Get weekly updates on new resources and Web3 trends</p>
                <div className="flex">
                  <input 
                    type="email" 
                    className="flex-grow px-4 py-2 bg-white/5 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white/30" 
                    placeholder="Your email address"
                  />
                  <button className="px-4 py-2 bg-white text-purple-700 font-medium rounded-r-lg hover:bg-purple-50 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hire Section */}
      <div id="hire" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hire the Developer</h2>
              <p className="text-lg text-gray-600 mb-8">
                Looking for expert Web3 development for your project? Our team specializes in:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Smart Contract Development</h4>
                    <p className="text-gray-600">Custom Solidity, Rust, and FunC smart contracts for various use cases</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">DApp Frontend Development</h4>
                    <p className="text-gray-600">Interactive and responsive web applications with modern frameworks</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Security Audits</h4>
                    <p className="text-gray-600">Comprehensive smart contract audits and security consulting</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Web3 Education</h4>
                    <p className="text-gray-600">Custom training programs and workshops for your team</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Project Consultation</h4>
                    <p className="text-gray-600 text-sm">
                      Not sure what you need? Schedule a free 30-minute consultation to discuss your project requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white">
                      <option value="">Select project type</option>
                      <option value="smart-contract">Smart Contract Development</option>
                      <option value="dapp">DApp Development</option>
                      <option value="audit">Security Audit</option>
                      <option value="education">Web3 Education/Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                      rows={4}
                      placeholder="Tell us about your project and requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                      <span className="text-sm text-gray-600">I agree to the privacy policy and terms of service</span>
                    </label>
                  </div>
                  
                  <button className="w-full py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition duration-300 shadow-sm hover:shadow-md">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold">Rapto<span className="text-purple-400">Hub</span></span>
              </div>
              <p className="text-gray-400">
                Your gateway to Web3 resources and learning
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.54 10.54 0 01-3.126 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors duration-300">Resources</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
                <li><a href="#hire" className="text-gray-400 hover:text-white transition-colors duration-300">Hire the Developer</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Solidity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Rust</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FunC</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Auditing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Jobs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">contact@raptohub.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Web3 Avenue, Blockchain City</span>
                </li>
                <li>
                  <a href="#hire" className="inline-flex items-center px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300">
                    Hire the Developer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} RaptoHub. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}