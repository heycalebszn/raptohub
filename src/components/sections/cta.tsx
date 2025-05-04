const cta = () => {
  return (
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
  )
}

export default cta
