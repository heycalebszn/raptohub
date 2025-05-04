import { useState } from 'react';
import { Send, Star, Code, Check, Sparkles } from 'lucide-react';

const Hire = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    budget: '',
    description: '',
    type: 'development'
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          budget: '',
          description: '',
          type: 'development'
        });
      }, 3000);
    }, 1500);
  };
  
  // Service features
  const services = [
    {
      id: 'development',
      title: 'Blockchain Development',
      icon: <Code className="w-6 h-6 text-neon-blue" />,
      features: [
        'Smart contract development',
        'dApp frontend implementation',
        'Web3 integration services',
        'Cross-chain applications'
      ]
    },
    {
      id: 'audit',
      title: 'Security Audit',
      icon: <Shield className="w-6 h-6 text-neon-green" />,
      features: [
        'Smart contract vulnerability assessment',
        'Code review and optimization',
        'Security enhancement recommendations',
        'Post-audit support'
      ]
    },
    {
      id: 'consultation',
      title: 'Web3 Consultation',
      icon: <Star className="w-6 h-6 text-neon-yellow" />,
      features: [
        'Blockchain strategy development',
        'Technology stack selection',
        'Architecture planning',
        'Team training and workshops'
      ]
    }
  ];

  return (
    <div id="hire" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 right-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />

      {/* Animated decorative elements */}
      <div className="absolute left-10 top-40 w-24 h-24 border border-neon-pink rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute right-20 bottom-60 w-32 h-32 border border-neon-blue rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-neon-green mr-2 animate-pulse"></span>
            Work With Us
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Hire <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">Blockchain</span> Experts
          </h2>
          <p className="text-lg text-gray-300">
            Our team of experienced Web3 developers can bring your blockchain vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Services */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-cyber-grid opacity-10" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">Our Services</h3>
                
                <div className="space-y-6">
                  {services.map(service => (
                    <div 
                      key={service.id}
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        formState.type === service.id 
                          ? 'bg-cyber-light/30 border border-primary-500/30' 
                          : 'bg-cyber-light/10 border border-transparent hover:bg-cyber-light/20'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-cyber-dark rounded-lg">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <Check className="w-4 h-4 text-neon-green mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => setFormState(prev => ({ ...prev, type: service.id }))}
                            className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              formState.type === service.id
                                ? 'bg-neon-blue text-white'
                                : 'bg-cyber-dark text-gray-300 hover:bg-cyber-light/30'
                            }`}
                          >
                            Select Service
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-neon-blue opacity-10 blur-[60px]" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-neon-purple opacity-10 blur-[60px]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles className="w-5 h-5 text-neon-yellow" />
                  <h3 className="text-lg font-semibold text-white">Client Feedback</h3>
                </div>
                
                <blockquote className="text-gray-300 italic mb-4">
                  "The team delivered our DeFi project ahead of schedule with impeccable code quality. Their blockchain expertise was evident throughout the development process."
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyber-light/50 flex items-center justify-center text-neon-pink font-bold">
                    D
                  </div>
                  <div>
                    <div className="font-medium text-white">David Chen</div>
                    <div className="text-xs text-primary-300">DeFi Protocol Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-1 relative overflow-hidden">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-30 blur-sm"></div>
            
            <div className="relative rounded-2xl overflow-hidden bg-cyber-dark/80 backdrop-blur-md p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Get in Touch</h3>
                <p className="text-gray-300">Fill out the form below to discuss your project needs</p>
              </div>
              
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-neon-green" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">We'll get back to you within 24 hours</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-light/20 border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-light/20 border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-gray-400"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-light/20 border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-gray-400"
                      >
                        <option value="" disabled>Select budget range</option>
                        <option value="small">$5,000 - $10,000</option>
                        <option value="medium">$10,000 - $25,000</option>
                        <option value="large">$25,000 - $50,000</option>
                        <option value="enterprise">$50,000+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Project Description</label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        value={formState.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-cyber-light/20 border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-neon-blue hover:shadow-neon transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Shield component definition
const Shield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default Hire;
