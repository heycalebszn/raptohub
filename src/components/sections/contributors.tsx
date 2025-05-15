import {
  Github,
  Twitter,
  Linkedin,
  ArrowUpRight,
  UserRound,
} from "lucide-react";

const Contributors = () => {
  const contributors = [
    {
      id: 1,
      name: "Rapto",
      role: "Full Stack web2 & web3 Developer",
      avatar: "/avatars/rapto.jpg",
      bio: "I'm Caleb Kalejaiye, with 3+ Years of experience. Started coding in 2021, specializing in web development, blockchain development, LLM, and indie hacking.",
      github: "https://github.com/heycalebszn",
      twitter: "https://x.com/heyrapto",
      linkedin: "https://www.linkedin.com/in/caleb/?originalSubdomain=ng",
      portfolio: "https://rapto.vercel.app/",
    },
    {
      id: 2,
      name: "Saber",
      role: "Full Stack Blockchain Developer",
      avatar: "/avatars/saber.png",
      bio: "I'm a highly motivated Full Stack Web3 Engineer with a deep passion for crafting innovative and efficient solutions.",
      github: "https://github.com/Saber1Y",
      twitter: "https://x.com/Sabercodes123",
      linkedin: "https://www.linkedin.com/in/akintobi-ayodeji-86a675236",
      portfolio: "https://saber-dev.vercel.app/",
    },
    // },
    // {
    //   id: 3,
    //   name: 'Marcus Rivera',
    //   role: 'Security Researcher',
    //   avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    //   bio: 'Smart contract auditor and security researcher focused on preventing vulnerabilities in DeFi protocols.',
    //   github: 'https://github.com/marcusrivera',
    //   twitter: 'https://twitter.com/marcusrivera',
    //   linkedin: 'https://linkedin.com/in/marcusrivera'
    // },
    // {
    //   id: 4,
    //   name: 'Emma Williams',
    //   role: 'Full Stack Developer',
    //   avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    //   bio: 'Full stack engineer building cross-chain applications and tools for blockchain developers.',
    //   github: 'https://github.com/emmawilliams',
    //   twitter: 'https://twitter.com/emmawilliams',
    //   linkedin: 'https://linkedin.com/in/emmawilliams'
    // }
  ];

  return (
    <div id="contributors" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-dark bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 left-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm text-primary-300 backdrop-blur-sm mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-neon-blue mr-2"></span>
            Meet The Team
          </div>
          <h2 className="text-4xl font-bold mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Follow our contributors to stay updated with the latest in Web3
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="group relative glassmorphism rounded-xl overflow-hidden hover:border-primary-500/40 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/0 via-neon-purple/0 to-neon-blue/0 group-hover:from-neon-pink/10 group-hover:via-neon-purple/10 group-hover:to-neon-blue/10 transition-all duration-500"></div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500"></div>
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-transparent group-hover:border-neon-purple transition-all duration-300"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {contributor.name}
                  </h3>
                  <p className="text-neon-purple text-sm mb-3">
                    {contributor.role}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {contributor.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={contributor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-darker rounded-full text-gray-400 hover:text-white hover:bg-neon-purple/20 transition-all duration-300"
                      aria-label={`${contributor.name}'s GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={contributor.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-darker rounded-full text-gray-400 hover:text-white hover:bg-neon-blue/20 transition-all duration-300"
                      aria-label={`${contributor.name}'s Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-darker rounded-full text-gray-400 hover:text-white hover:bg-neon-pink/20 transition-all duration-300"
                      aria-label={`${contributor.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={contributor.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-darker rounded-full text-gray-400 hover:text-white hover:bg-neon-pink/20 transition-all duration-300"
                      aria-label={`${contributor.name}'s LinkedIn`}
                    >
                      <UserRound className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/raptohub/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-cyber-light/20 backdrop-blur-sm border border-primary-500/20 rounded-lg text-white hover:bg-cyber-light/30 hover:border-primary-500/40 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            Become a Contributor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
