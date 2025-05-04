import Hero from './components/sections/hero';
import Resources from './components/sections/resources';
import About from './components/sections/about';
import Testimonials from './components/sections/testimonials';
import CTA from './components/sections/cta';
import Hire from './components/sections/hire';
import Roadmap from './components/sections/roadmap';
import Contributors from './components/sections/contributors';
import Navbar from './components/shared/navbar';
const App = () => {

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-hidden">
      {/* NavBar */}
      <Navbar />

      <main>
        <Hero />
        <Resources />
        <Roadmap />
        <Contributors />
        <About />
        <Testimonials />
        <CTA />
        <Hire />
      </main>

      <footer className="bg-cyber-dark border-t border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">
                Rapto<span className="text-neon-purple">Hub</span>
              </span>
              <p className="mt-2 text-sm text-gray-400">Your gateway to Web3 development resources</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                Discord
              </a>
              <a href="https://chat.whatsapp.com/JBqrLwbQJF9Cwilajd5Moo" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} RaptoHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
