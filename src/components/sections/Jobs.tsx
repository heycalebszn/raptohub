
const Jobs = () => {
  return (
    <div id="jobs" className="">
      <div className="absolute inset-0 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px] z-0" />
      <div className="absolute top-0 right-0 h-96 w-96 bg-neon-blue opacity-5 blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-neon-purple opacity-5 blur-[100px] z-0" />
      {/* Animated decorative elements */}
      <div className="absolute left-10 top-40 w-24 h-24 border border-neon-pink rounded-full opacity-10 animate-pulse-slow" />
      <div
        className="absolute right-20 bottom-60 w-32 h-32 border border-neon-blue rounded-full opacity-10 animate-float"
        style={{ animationDelay: "1s" }}
      />
      Jobs
    </div>
  );
};

export default Jobs;
