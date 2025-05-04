import { Globe, Code, Shield, Briefcase } from "lucide-react";
import { Category, Resource } from "../types";

export const categories: Category[] = [
  {
    id: "all",
    name: "All Resources",
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: "solidity",
    name: "Solidity",
    icon: <Code className="w-5 h-5" />
  },
  {
    id: "rust",
    name: "Rust",
    icon: <Code className="w-5 h-5" />
  },
  {
    id: "func",
    name: "FunC",
    icon: <Code className="w-5 h-5" />
  },
  {
    id: "auditing",
    name: "Auditing",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "jobs",
    name: "Jobs",
    icon: <Briefcase className="w-5 h-5" />
  }
];
  
export const resourcesData: Resource[] = [
    {
      id: 1,
      title: "Solidity Documentation",
      description: "Official documentation for Solidity, the smart contract programming language for Ethereum.",
      url: "https://docs.soliditylang.org/",
      category: "solidity",
      featured: true,
      tags: ["ethereum", "documentation", "beginner-friendly"]
    },
    {
      id: 2,
      title: "CryptoZombies",
      description: "Learn to code blockchain DApps by building your own games. Interactive tutorials make learning fun.",
      url: "https://cryptozombies.io/",
      category: "solidity",
      tags: ["ethereum", "interactive", "gamified"]
    },
    {
      id: 3,
      title: "Rust Book",
      description: "The official Rust programming language book. Comprehensive guide to the language fundamentals.",
      url: "https://doc.rust-lang.org/book/",
      category: "rust",
      featured: true,
      tags: ["language", "documentation", "fundamentals"]
    },
    {
      id: 4,
      title: "Rust for Blockchain",
      description: "Learn how to use Rust for blockchain development, with examples for Substrate, Near, and more.",
      url: "https://github.com/rust-blockchain/rust-blockchain",
      category: "rust",
      tags: ["substrate", "near", "tutorials"]
    },
    {
      id: 5,
      title: "FunC Documentation",
      description: "Official documentation for FunC, the smart contract language for TON blockchain.",
      url: "https://ton.org/docs/#/func",
      category: "func",
      featured: true,
      tags: ["ton", "documentation", "smart-contracts"]
    },
    {
      id: 6,
      title: "Learn FunC",
      description: "Interactive tutorials to learn FunC for TON blockchain. Step-by-step guides for all skill levels.",
      url: "https://ton.org/learn/func",
      category: "func",
      tags: ["ton", "tutorials", "interactive"]
    },
    {
      id: 7,
      title: "Audit Techniques & Tools 101",
      description: "Introduction to smart contract auditing techniques and tools. Learn best practices for security.",
      url: "https://consensys.github.io/smart-contract-best-practices/",
      category: "auditing",
      featured: true,
      tags: ["security", "best-practices", "vulnerabilities"]
    },
    {
      id: 8,
      title: "Trail of Bits - Building Secure Smart Contracts",
      description: "Comprehensive guide to security considerations when building smart contracts. Industry standard resources.",
      url: "https://github.com/crytic/building-secure-contracts",
      category: "auditing",
      tags: ["security", "guides", "tools"]
    },
    {
      id: 9,
      title: "Web3 Jobs",
      description: "Premium job board for Web3 developers and professionals. Curated opportunities from top projects.",
      url: "https://web3.career/",
      category: "jobs",
      featured: true,
      tags: ["remote", "full-time", "global"]
    },
    {
      id: 10,
      title: "CryptoJobs",
      description: "Find blockchain and cryptocurrency jobs. Roles for developers, marketers, and executives.",
      url: "https://crypto.jobs/",
      category: "jobs",
      tags: ["web3", "blockchain", "startups"]
    },
    {
      id: 11,
      title: "Hardhat",
      description: "Development environment to compile, deploy, test, and debug Ethereum software. Industry standard.",
      url: "https://hardhat.org/",
      category: "solidity",
      tags: ["ethereum", "tools", "testing"]
    },
    {
      id: 12,
      title: "Foundry",
      description: "Blazing fast, portable and modular toolkit for Ethereum application development written in Rust.",
      url: "https://book.getfoundry.sh/",
      category: "solidity",
      tags: ["ethereum", "tools", "testing"]
    }
  ];
  
export const statsData = [
    { id: 1, value: "12+", label: "Curated Resources" },
    { id: 2, value: "6", label: "Categories" },
    { id: 3, value: "100%", label: "Free Access" },
    { id: 4, value: "24/7", label: "Developer Support" }
  ];
  
export const testimonials = [
    {
      id: 1,
      text: "RaptoHub helped me transition from Web2 to Web3 development in just 3 months. The curated resources saved me countless hours of research.",
      author: "Alex K.",
      role: "Smart Contract Developer"
    },
    {
      id: 2,
      text: "As a technical recruiter, I use RaptoHub to understand the Web3 landscape and find quality candidates who have followed the right learning paths.",
      author: "Sarah M.",
      role: "Tech Recruiter"
    },
    {
      id: 3,
      text: "The audit resources on RaptoHub helped our team implement security best practices from day one. Essential platform for serious Web3 teams.",
      author: "Michael D.",
      role: "DeFi Project Lead"
    }
  ];