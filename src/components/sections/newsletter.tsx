import { useState } from 'react';
import { Send, Mail, Bell, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute -top-40 -right-40 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0 transform rotate-45" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0 transform -rotate-45" />
      
      {/* Animated elements */}
      <div className="absolute top-10 right-40 w-16 h-16 border border-neon-pink rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-20 left-40 w-24 h-24 border border-neon-blue rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism rounded-2xl p-1 overflow-hidden">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-20 blur-sm"></div>
          
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-10" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue opacity-10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-purple opacity-10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm">
                    <Bell className="h-4 w-4 mr-2 animate-pulse" />
                    Stay Updated
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Join Our Web3 <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Newsletter</span>
                  </h2>
                  
                  <p className="text-gray-300">
                    Get weekly updates on new resources, emerging technologies, and career opportunities in the blockchain ecosystem.
                  </p>
                  
                  <div className="pt-2">
                    {submitted ? (
                      <div className="flex items-center text-neon-green">
                        <Check className="mr-2 h-5 w-5" />
                        <span>Thank you! Your subscription has been confirmed.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-grow relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-3 bg-cyber-light/20 border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-gray-400"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium rounded-lg flex items-center justify-center space-x-2 shadow-neon-blue hover:shadow-neon transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                        >
                          {submitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Subscribing...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              <span>Subscribe</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
                
                <div className="md:col-span-5 hidden md:block">
                  <div className="relative bg-cyber-dark/40 backdrop-blur-md p-6 rounded-xl border border-primary-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-neon-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">Subscriber Benefits</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {[
                        "Weekly curated resources",
                        "Early access to tutorials",
                        "Exclusive event invitations",
                        "Job opportunities"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-1">
                            <Check className="h-4 w-4 text-neon-green" />
                          </div>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-primary-500/20">
                      <div className="text-sm text-gray-400">
                        Join <span className="text-neon-blue">2,400+</span> blockchain developers 
                        and enthusiasts who receive our weekly insights
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
