const Jobs = () => {
  const mockBounties = [
    {
      id: 1,
      title: "Build a Token Gating System",
      reward: "$300 - $500",
      tags: ["Solidity", "Next.js"],
      currency: "USDC",
      status: "Remote",
      deadline: "Sept 30, 2025",
      image: "/logos/daohaus.png", // Add your image here
    },
    {
      id: 2,
      title: "Smart Contract Audit for NFT Collection",
      reward: "$500 - $1000",
      tags: ["Solidity", "Security"],
      currency: "ETH",
      status: "Remote",
      deadline: "Oct 5, 2025",
      image: "/logos/nftproject.png",
    },
  ];

  return (
    <div id="jobs" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 right-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />

      {/* Animated decorative elements */}
      <div className="absolute left-10 top-40 w-24 h-24 border border-neon-pink rounded-full opacity-10 animate-pulse-slow" />
      <div
        className="absolute right-20 bottom-60 w-32 h-32 border border-neon-blue rounded-full opacity-10 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Jobs & Bounties</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Browse active Web3 bounties or job openings. Submit your own via the
            form.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {mockBounties.map((bounty) => (
            <div
              key={bounty.id}
              className="bg-cyber-light/30  flex flex-col space-y-4 border border-neon-pink  p-6 rounded-2xl shadow-xl hover:shadow-neon-pink/20 transition"
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center space-x-4">
                  {bounty.image && (
                    <img
                      src={bounty.image}
                      alt={bounty.title}
                      className="w-12 h-12 object-contain rounded-full border border-white/10"
                    />
                  )}
                  <h2 className="text-xl font-semibold text-neon-pink">
                    {bounty.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-300 mt-1 mb-2">
                  {bounty.reward}

                  <span className="ml-2">({bounty.currency})</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-sm mb-3">
                {bounty.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{bounty.status}</span>
                <span>Deadline: {bounty.deadline}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/submit"
            className=" py-3 px-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium rounded-lg flex items-center justify-center  shadow-neon-blue hover:shadow-neon transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
          >
            Submit a Bounty / Job
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
