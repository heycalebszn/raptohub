import { Code, Shield } from "lucide-react"

const about = () => {
  return (
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
  )
}

export default about
