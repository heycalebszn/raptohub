import { Globe, Code, Shield } from "lucide-react";
import { Category, Resource } from "../types";

export const categories: Category[] = [
  {
    id: "all",
    name: "All Resources",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "solidity",
    name: "Backend (Smart Contracts)",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "Integration",
    name: "Connect Frontend & backend",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "libraries",
    name: "Libraries",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "Wallets",
    name: "Wallet Connect",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "deploying",
    name: "Deploying (Frameworks)",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "node",
    name: "Node-as-a-Service",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "auditing",
    name: "Auditing (Smart Contract)",
    icon: <Shield className="w-5 h-5" />,
  },
];

export const resourcesData: Resource[] = [
  {
    id: 1,
    title: "Solidity Documentation",
    description:
      "Official documentation for Solidity, the smart contract programming language for Ethereum.",
    url: "https://docs.soliditylang.org/",
    category: "solidity",
    featured: true,
    tags: ["ethereum", "documentation", "beginner-friendly"],
  },
  {
    id: 2,
    title: "Cyfrin Updraft",
    description:
      "Start your blockchain dev journey here! It offers easy-to-follow tutorials, from setting up smart contracts to mastering Solidity. Perfect for beginners looking for hands-on experience.",
    url: "https://updraft.cyfrin.io/dashboard",
    category: "solidity",
    tags: ["ethereum", "tools", "resources", "security", "tutorials"],
  },
  {
    id: 3,
    title: "Alchemy University",
    description:
      "Alchemys free courses provide in-depth knowledge on Ethereum and web3 dev tools, making it easy to go from novice to pro. Best for diving into decentralized development with EVM focus.",
    url: "https://www.alchemy.com/university/courses",
    category: "solidity",
    tags: ["ethereum", "tools", "resources", "tutorials"],
  },
  {
    id: 4,
    title: "Rust for Blockchain",
    description:
      "Learn how to use Rust for blockchain development, with examples for Substrate, Near, and more.",
    url: "https://github.com/rust-blockchain/rust-blockchain",
    category: "solidity",
    tags: ["substrate", "near", "tutorials"],
  },
  {
    id: 5,
    title: "FunC Documentation",
    description:
      "Official documentation for FunC, the smart contract language for TON blockchain.",
    url: "https://ton.org/docs/#/func",
    category: "solidity",
    featured: true,
    tags: ["ton", "documentation", "smart-contracts"],
  },
  {
    id: 6,
    title: "Learn FunC",
    description:
      "Interactive tutorials to learn FunC for TON blockchain. Step-by-step guides for all skill levels.",
    url: "https://ton.org/learn/func",
    category: "solidity",
    tags: ["ton", "tutorials", "interactive"],
  },
  {
    id: 7,
    title: "Audit Techniques & Tools 101",
    description:
      "Introduction to smart contract auditing techniques and tools. Learn best practices for security.",
    url: "https://consensys.github.io/smart-contract-best-practices/",
    category: "auditing",
    featured: true,
    tags: ["security", "best-practices", "vulnerabilities"],
  },
  {
    id: 8,
    title: "Trail of Bits - Building Secure Smart Contracts",
    description:
      "Comprehensive guide to security considerations when building smart contracts. Industry standard resources.",
    url: "https://github.com/crytic/building-secure-contracts",
    category: "auditing",
    tags: ["security", "guides", "tools"],
  },
  {
    id: 9,
    title: "Web3 Jobs",
    description:
      "Premium job board for Web3 developers and professionals. Curated opportunities from top projects.",
    url: "https://web3.career/",
    category: "jobs",
    featured: true,
    tags: ["remote", "full-time", "global"],
  },
  {
    id: 10,
    title: "CryptoJobs",
    description:
      "Find blockchain and cryptocurrency jobs. Roles for developers, marketers, and executives.",
    url: "https://crypto.jobs/",
    category: "jobs",
    tags: ["web3", "blockchain", "startups"],
  },
  {
    id: 11,
    title: "Hardhat",
    description:
      "Development environment to compile, deploy, test, and debug Ethereum software. Industry standard.",
    url: "https://hardhat.org/",
    category: "deploying",
    tags: ["ethereum", "tools", "testing"],
  },
  {
    id: 12,
    title: "Foundry",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development written in Rust.",
    url: "https://book.getfoundry.sh/",
    category: "deploying",
    tags: ["ethereum", "tools", "testing"],
  },
  {
    id: 13,
    title: "CryptoZombies",
    description:
      "Learn to code blockchain DApps by building your own games. Interactive tutorials make learning fun.",
    url: "https://cryptozombies.io/",
    category: "solidity",
    tags: ["ethereum", "interactive", "gamified"],
  },
  {
    id: 14,
    title: "Rust Book",
    description:
      "The official Rust programming language book. Comprehensive guide to the language fundamentals.",
    url: "https://doc.rust-lang.org/book/",
    category: "solidity",
    featured: true,
    tags: ["language", "documentation", "fundamentals"],
  },
  {
    id: 16,
    title: "Speed Run Ethereum",
    description:
      "A series of challenges designed by Austin Griffith to help developers master smart contracts and DApp development with Scaffold-ETH.",
    url: "https://speedrunethereum.com/",
    category: "solidity",
    tags: ["ethereum", "scaffold-eth", "challenges", "solidity"],
  },
  {
    id: 17,
    title: "Scaffold-ETH 2",
    description:
      "A modern, full-stack Ethereum app starter kit using Next.js, Hardhat, RainbowKit, Wagmi, and Viem. Rapid prototyping for DApps.",
    url: "https://github.com/scaffold-eth/scaffold-eth-2",
    category: "libraries",
    tags: ["ethereum", "starter-kit", "wagmi", "viem", "rainbowkit"],
  },
  {
    id: 19,
    title: "Thirdweb",
    description:
      "Platform to build and deploy web3 apps with pre-built smart contracts, SDKs, and React components. Ideal for rapid development.",
    url: "https://thirdweb.com/",
    category: "libraries",
    tags: ["tools", "sdk", "smart-contracts", "react", "nft", "gaming"],
  },
  {
    id: 20,
    title: "Moralis Docs",
    description:
      "Backend-as-a-service platform for DApps. Offers APIs, authentication, and real-time event handling with easy-to-use SDKs.",
    url: "https://docs.moralis.io/",
    category: "banode",
    tags: ["web3", "authentication", "api", "real-time"],
  },
  {
    id: 38,
    title: "Alchemy",
    description:
      "Node-as-a-service provider offering high-performance RPC endpoints, APIs, and tools for Ethereum and other networks.",
    url: "https://www.alchemy.com/",
    category: "node",
    featured: true,
    tags: ["rpc", "node", "ethereum", "infrastructure"],
  },
  {
    id: 39,
    title: "Infura",
    description:
      "Powerful Web3 infrastructure for developers. Connect your DApp to Ethereum, IPFS, and other networks easily.",
    url: "https://www.infura.io/",
    category: "node",
    tags: ["rpc", "ipfs", "infrastructure", "ethereum"],
  },
  {
    id: 21,
    title: "Ethers.js Documentation",
    description:
      "Complete documentation for Ethers.js, a lightweight JavaScript library for interacting with the Ethereum blockchain.",
    url: "https://docs.ethers.org/",
    category: "Integration",
    tags: ["ethers", "javascript", "blockchain", "library"],
  },
  {
    id: 22,
    title: "RainbowKit Docs",
    description:
      "Plug-and-play wallet connection UI for your DApp. Works seamlessly with Wagmi and Viem.",
    url: "https://www.rainbowkit.com/docs/introduction",
    category: "wallet",
    tags: ["wallet", "rainbowkit", "wagmi", "viem", "connect"],
  },
  {
    id: 23,
    title: "Wagmi Docs",
    description:
      "React Hooks for Ethereum. Wagmi makes it easy to interact with wallets, contracts, and providers using a modern, type-safe approach.",
    url: "https://wagmi.sh/",
    category: "Integration",
    featured: true,
    tags: ["hooks", "ethereum", "wallet", "connect", "frontend"],
  },
  {
    id: 24,
    title: "Viem Docs",
    description:
      "Viem is a TypeScript-first, modern Ethereum library built for performance, DX, and safety. Works great with Wagmi.",
    url: "https://viem.sh/",
    category: "Integration",
    tags: ["typescript", "ethereum", "library", "frontend", "rpc"],
  },
  {
    id: 25,
    title: "React Documentation",
    description:
      "The official documentation for React, a JavaScript library for building user interfaces — essential for building DApp frontends.",
    url: "https://react.dev/",
    category: "frontend",
    featured: true,
    tags: ["javascript", "library", "frontend", "ui"],
  },
  {
    id: 26,
    title: "Next.js Documentation",
    description:
      "The official Next.js docs. Learn how to build fast, full-stack React applications using file-based routing, API routes, and SSR.",
    url: "https://nextjs.org/docs",
    category: "frontend",
    featured: true,
    tags: ["react", "ssr", "fullstack", "routing", "deployment"],
  },
  {
    id: 29,
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes to build custom designs without writing CSS from scratch.",
    url: "https://tailwindcss.com/docs",
    category: "frontend",
    featured: true,
    tags: ["css", "utility", "frontend", "responsive"],
  },
  {
    id: 30,
    title: "Bootstrap",
    description:
      "Popular front-end open-source toolkit for developing responsive, mobile-first websites using CSS and JS components.",
    url: "https://getbootstrap.com/",
    category: "frontend",
    tags: ["css", "frontend", "responsive", "framework"],
  },
  {
    id: 31,
    title: "MDN CSS Docs",
    description:
      "Mozilla Developer Network's official documentation on CSS. The ultimate reference for styling the web.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    category: "frontend",
    tags: ["css", "reference", "mdn", "web"],
  },
];

export const statsData = [
  { id: 1, value: "12+", label: "Curated Resources" },
  { id: 2, value: "6", label: "Categories" },
  { id: 3, value: "100%", label: "Free Access" },
  { id: 4, value: "24/7", label: "Developer Support" },
];

export const testimonials = [
  {
    id: 1,
    text: "Web3Nest helped me transition from Web2 to Web3 development in just 3 months. The curated resources saved me countless hours of research.",
    author: "Alex K.",
    role: "Smart Contract Developer",
  },
  {
    id: 2,
    text: "As a technical recruiter, I use Web3Nest to understand the Web3 landscape and find quality candidates who have followed the right learning paths.",
    author: "Sarah M.",
    role: "Tech Recruiter",
  },
  {
    id: 3,
    text: "The audit resources on Web3Nest helped our team implement security best practices from day one. Essential platform for serious Web3 teams.",
    author: "Michael D.",
    role: "DeFi Project Lead",
  },
];
