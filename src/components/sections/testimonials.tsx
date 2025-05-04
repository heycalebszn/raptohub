import { ArrowRight } from 'lucide-react'
import { testimonials } from '../../constants'

const Testimonials = () => {
  return (
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
  )
}

export default Testimonials;
